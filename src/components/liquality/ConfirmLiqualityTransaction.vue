<template>
  <div class="transactions">
    <v-row class="mx-0 my-8">
      <tx-summary :showTxId="false" :initial-expand="true"/>
    </v-row>
    <v-row class="mx-0 my-8">
      <advanced-data :rawTx="rawTx" :initial-expand="false"/>
    </v-row>
    <v-row v-if="confirmTxState.matches(['idle', 'error', 'goingHome'])" class="ma-0">
      <v-col cols="2" class="d-flex justify-start ma-0 py-0">
        <v-btn rounded outlined color="#00B520" width="110" @click="toPegInForm"
               :disabled="confirmTxState.matches(['error', 'goingHome', 'loading'])">
          <span>Back</span>
        </v-btn>
      </v-col>
      <v-col cols="10" class="d-flex justify-end ma-0 py-0">
        <v-btn rounded color="#00B520" width="110" @click="toTrackId"
               :disabled="confirmTxState.matches(['error', 'goingHome', 'loading'])">
          <span class="whiteish">Sign</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="confirmTxState.matches(['loading'])" class="mx-0 d-flex justify-center">
      <v-col>
        <v-row class="mx-0 mb-5 d-flex justify-center">
          See your Ledger device to confirm your transaction!
        </v-row>
        <v-row class="mx-0 mb-5 mt-10 d-flex justify-center">
          <v-progress-circular indeterminate :size="60" :width="8" color="#00B520" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {
  Component, Emit, Prop,
  Vue,
} from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class';
import {
  LedgerTx, LedgerSignedTx,
} from '@/types';
import TxSummary from '@/components/exchange/TxSummary.vue';
import ApiService from '@/services/ApiService';
import AdvancedData from '@/components/exchange/AdvancedData.vue';
import SatoshiBig from '@/types/SatoshiBig';
import LedgerTxBuilder from '@/middleware/TxBuilder/LedgerTxBuilder';
import { WalletService } from '@/services';
import { Machine } from '@/services/utils';
import EnvironmentContextProviderService from '@/providers/EnvironmentContextProvider';
import { PegInTxState } from '@/types/pegInTx';
import * as constants from '@/store/constants';

@Component({
  components: {
    TxSummary,
    AdvancedData,
  },
})
export default class ConfirmLedgerTransaction extends Vue {
  txId = '';

  rawTx = '';

  @Prop() confirmTxState!: Machine<
    'idle'
    | 'loading'
    | 'error'
  >;

  @Prop() txBuilder!: LedgerTxBuilder;

  @State('pegInTx') pegInTxState!: PegInTxState;

  @Getter(constants.PEGIN_TX_GET_SAFE_TX_FEE, { namespace: 'pegInTx' }) safeFee!: SatoshiBig;

  @Action(constants.PEGIN_TX_STOP_ASKING_FOR_BALANCE, { namespace: 'pegInTx' }) stopAskingForBalance !: () => Promise<void>;

  @Getter(constants.PEGIN_TX_GET_WALLET_SERVICE, { namespace: 'pegInTx' }) walletService!: WalletService;

  environmentContext = EnvironmentContextProviderService.getEnvironmentContext();

  @Emit('successConfirmation')
  async toTrackId() {
    const LEDGER_STATUS_CODES = { TRANSACTION_CANCELLED_BY_USER: 27013, DEVICE_LOCKED: 27010 };
    let txError = '';
    this.confirmTxState.send('loading');
    await this.walletService.stopAskingForBalance()
      .then(() => {
        if (this.pegInTxState.selectedAccount) {
          return this.txBuilder
            .buildTx(this.pegInTxState.normalizedTx, this.pegInTxState.selectedAccount);
        }
        throw new Error('The account type is not set');
      })
      .then((ledgerTx: LedgerTx) => this.walletService.sign(ledgerTx) as Promise<LedgerSignedTx>)
      .then((tx: LedgerSignedTx) => ApiService
        .broadcast(tx.signedTx))
      .then((txId) => {
        this.txId = txId;
      })
      .catch((err) => {
        this.confirmTxState.send('error');
        switch (err.statusCode) {
          case LEDGER_STATUS_CODES.DEVICE_LOCKED:
            txError = 'Please unlock your Ledger device.';
            break;
          case LEDGER_STATUS_CODES.TRANSACTION_CANCELLED_BY_USER:
            txError = 'Transaction cancelled by user.';
            break;
          default:
            txError = err.message;
            break;
        }
      });
    return [txError, this.txId];
  }

  @Emit('toPegInForm')
  toPegInForm() {
    this.confirmTxState.send('loading');
  }

  // eslint-disable-next-line class-methods-use-this
  cropAddress(address: string):string {
    return `${address.substr(0, 6)}...${address.substr(address.length - 6, address.length)}`;
  }

  // eslint-disable-next-line class-methods-use-this
  splitString(s: string): string[] {
    return s.match(/.{1,16}/g) ?? [];
  }

  get rskFederationAddress():string {
    return this.pegInTxState.normalizedTx.outputs[1]?.address?.trim() ?? `${this.environmentContext.getBtcText()} Powpeg address not found`;
  }

  get changeAddress(): string {
    const [, , change] = this.pegInTxState.normalizedTx.outputs;
    if (change && change.address) {
      return change.address;
    }
    return 'Change address not found';
  }

  get changeAmount() {
    const changeAmount = new SatoshiBig(this.pegInTxState.normalizedTx.outputs[2]?.amount ?? 0, 'satoshi');
    return changeAmount.toBTCTrimmedString();
  }

  async created() {
    this.rawTx = await this.txBuilder.getUnsignedRawTx(this.pegInTxState.normalizedTx);
  }
}
</script>

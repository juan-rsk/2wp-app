export const WALLET_LEDGER = 'WALLET_LEDGER';
export const WALLET_TREZOR = 'WALLET_TREZOR';

// devices
export const IS_TREZOR_CONNECTED = 'IS_TREZOR_CONNECTED';

// Transaction Type
export const PEG_IN_TRANSACTION_TYPE = 'PEG_IN_TRANSACTION_TYPE';
export const PEG_OUT_TRANSACTION_TYPE = 'PEG_OUT_TRANSACTION_TYPE';

// accounts
export const BITCOIN_LEGACY_ADDRESS = 'BITCOIN_LEGACY_ADDRESS';
export const BITCOIN_SEGWIT_ADDRESS = 'BITCOIN_SEGWIT_ADDRESS';
export const BITCOIN_NATIVE_SEGWIT_ADDRESS = 'BITCOIN_NATIVE_SEGWIT_ADDRESS';
export const BITCOIN_MULTISIGNATURE_ADDRESS = 'BITCOIN_MULTISIGNATURE_ADDRESS';

// Fee Level
export const BITCOIN_SLOW_FEE_LEVEL = 'BITCOIN_SLOW_FEE_LEVEL';
export const BITCOIN_AVERAGE_FEE_LEVEL = 'BITCOIN_AVERAGE_FEE_LEVEL';
export const BITCOIN_FAST_FEE_LEVEL = 'BITCOIN_FAST_FEE_LEVEL';

// Pegin tx Actions
export const PEGIN_TX_ADD_ADDRESSES = 'PEGIN_TX_ADD_ADDRESSES';
export const PEGIN_TX_ADD_UTXOS = 'PEGIN_TX_ADD_UTXOS';
export const PEGIN_TX_ADD_SESSION_ID = 'PEGIN_TX_ADD_SESSION_ID';
export const PEGIN_TX_ADD_PEGIN_CONFIGURATION = 'PEGIN_TX_ADD_PEGIN_CONFIGURATION';
export const PEGIN_TX_ADD_BITCOIN_WALLET = 'PEGIN_TX_ADD_BITCOIN_WALLET';
export const PEGIN_TX_ADD_BITCOIN_PRICE = 'PEGIN_TX_ADD_BITCOIN_PRICE';
export const PEGIN_TX_CLEAR_STATE = 'PEGIN_TX_CLEAR_STATE';
export const PEGIN_TX_SELECT_ACCOUNT_TYPE = 'PEGIN_TX_SELECT_ACCOUNT_TYPE';
export const PEGIN_TX_ADD_AMOUNT_TO_TRANSFER = 'PEGIN_TX_ADD_AMOUNT_TO_TRANSFER';
export const PEGIN_TX_CALCULATE_TX_FEE = 'PEGIN_TX_CALCULATE_TX_FEE';
export const PEGIN_TX_ADD_BALANCE = 'PEGIN_TX_ADD_BALANCE';
export const PEGIN_TX_ADD_RSK_ADDRESS = 'PEGIN_TX_ADD_RSK_ADDRESS';
export const PEGIN_TX_SELECT_FEE_LEVEL = 'PEGIN_TX_SELECT_FEE_LEVEL';
export const PEGIN_TX_ADD_IS_VALID_AMOUNT = 'PEGIN_TX_ADD_IS_VALID_AMOUNT';
export const PEGIN_TX_ADD_NORMALIZED_TX = 'PEGIN_TX_ADD_NORMALIZED_TX';
export const PEGIN_TX_START_ASKING_FOR_BALANCE = 'PEGIN_TX_START_ASKING_FOR_BALANCE';
export const PEGIN_TX_STOP_ASKING_FOR_BALANCE = 'PEGIN_TX_STOP_ASKING_FOR_BALANCE';
export const PEGIN_TX_ADD_STATUS_SAFE_FEE = 'PEGIN_TX_ADD_STATUS_SAFE_FEE';
export const PEGIN_TX_ADD_STATUS_REFUND_ADDRESS = 'PEGIN_TX_ADD_STATUS_REFUND_ADDRESS';
export const PEGIN_TX_ADD_STATUS_TX_ID = 'PEGIN_TX_ADD_STATUS_TX_ID';

// View actions
export const VIEW_ADD_CURRENT_VIEW = 'VIEW_ADD_CURRENT_VIEW';

// Session actions
export const WEB3_SESSION_GET_ACCOUNT = 'WEB3_SESSION_GET_ACCOUNT';
export const SESSION_CONNECT_WEB3 = 'SESSION_CONNECT_WEB3';
export const SESSION_ADD_TX_TYPE = 'SESSION_ADD_TX_TYPE';

// Pegin tx Mutations
export const PEGIN_TX_SET_ADDRESS_LIST = 'PEGIN_TX_SET_ADDRESS_LIST';
export const PEGIN_TX_SET_UTXO_LIST = 'PEGIN_TX_SET_UTXO_LIST';
export const PEGIN_TX_SET_TREZOR_CONNECTED = 'PEGIN_TX_SET_TREZOR_CONNECTED';
export const PEGIN_TX_SET_SESSION_ID = 'PEGIN_TX_SET_SESSION_ID';
export const PEGIN_TX_SET_PEGIN_CONFIGURATION = 'PEGIN_TX_SET_PEGIN_CONFIGURATION';
export const PEGIN_TX_SET_BITCOIN_WALLET = 'PEGIN_TX_SET_BITCOIN_WALLET';
export const PEGIN_TX_SET_BITCOIN_PRICE = 'PEGIN_TX_SET_BITCOIN_PRICE';
export const PEGIN_TX_INIT = 'PEGIN_TX_INIT';
export const PEGIN_TX_CLEAR = 'PEGIN_TX_CLEAR';
export const PEGIN_TX_SET_ACCOUNT_TYPE = 'PEGIN_TX_SET_ACCOUNT_TYPE';
export const PEGIN_TX_SET_AMOUNT_TO_TRANSFER = 'PEGIN_TX_SET_AMOUNT_TO_TRANSFER';
export const PEGIN_TX_SET_CALCULATED_TX_FEE = 'PEGIN_TX_SET_CALCULATED_TX_FEE';
export const PEGIN_TX_SET_BALANCE = 'PEGIN_TX_SET_BALANCE';
export const PEGIN_TX_SET_RSK_ADDRESS = 'PEGIN_TX_SET_RSK_ADDRESS';
export const PEGIN_TX_SET_SELECTED_FEE_LEVEL = 'PEGIN_TX_SET_SELECTED_FEE_LEVEL';
export const PEGIN_TX_SET_IS_VALID_AMOUNT = 'PEGIN_TX_SET_IS_VALID_AMOUNT';
export const PEGIN_TX_SET_LOADING_FEE = 'PEGIN_TX_SET_LOADING_FEE';
export const PEGIN_TX_SET_NORMALIZED_TX = 'PEGIN_TX_SET_NORMALIZED_TX';
export const PEGIN_TX_SET_WALLET_SERVICE = 'PEGIN_TX_SET_WALLET_SERVICE';
export const PEGIN_TX_SET_LOADING_BALANCE = 'PEGIN_TX_SET_LOADING_BALANCE';
export const PEGIN_TX_WALLET_SERVICE_SUBSCRIBE = 'PEGIN_TX_WALLET_SERVICE_SUBSCRIBE';
export const PEGIN_TX_SET_STATUS_SAFE_FEE = 'PEGIN_TX_SET_STATUS_SAFE_FEE';
export const PEGIN_TX_SET_STATUS_REFUND_ADDRESS = 'PEGIN_TX_SET_STATUS_REFUND_ADDRESS';
export const PEGIN_TX_SET_STATUS_TX_ID = 'PEGIN_TX_SET_STATUS_TX_ID';

// View mutations
export const VIEW_SET_CURRENT_VIEW = 'VIEW_SET_CURRENT_VIEW';

// Session mutations
export const SESSION_SET_ACCOUNT = 'SESSION_SET_ACCOUNT';
export const SESSION_SET_WEB3_INSTANCE = 'SESSION_SET_WEB3_INSTANCE';
export const SESSION_IS_ENABLED = 'SESSION_IS_ENABLED';
export const WEB3_SESSION_CLEAR_ACCOUNT = 'WEB3_SESSION_CLEAR_ACCOUNT';
export const SESSION_SET_RLOGIN = 'SESSION_SET_RLOGIN';
export const SESSION_SET_RLOGIN_INSTANCE = 'SESSION_SET_RLOGIN_INSTANCE';
export const SESSION_CLOSE_RLOGIN = 'SESSION_CLOSE_RLOGIN';
export const SESSION_SET_TX_TYPE = 'SESSION_SET_TX_TYPE';

// Pegin tx getters
export const WALLET_NAME = 'WALLET_NAME';
export const PEGIN_TX_GET_CHANGE_ADDRESS = 'PEGIN_TX_GET_CHANGE_ADDRESS';
export const PEGIN_TX_GET_BIP44_DERIVATION_PATH_FROM_ADDRESS = 'PEGIN_TX_GET_BIP44_DERIVATION_PATH_FROM_ADDRESS';
export const PEGIN_TX_GET_REFUND_ADDRESS = 'PEGIN_TX_GET_REFUND_ADDRESS';
export const PEGIN_TX_GET_ADDRESS_PUBLIC_KEY = 'PEGIN_TX_GET_ADDRESS_PUBLIC_KEY';
export const PEGIN_TX_GET_SAFE_TX_FEE = 'PEGIN_TX_GET_SAFE_TX_FEE';
export const PEGIN_TX_GET_WALLET_SERVICE = 'PEGIN_TX_GET_WALLET_SERVICE';
export const PEGIN_TX_GET_SELECTED_BALANCE = 'PEGIN_TX_GET_SELECTED_BALANCE';
export const PEGIN_TX_IS_LOADING_BALANCE = 'PEGIN_TX_IS_LOADING_BALANCE';
export const PEGIN_TX_GET_STATUS_TX_ID = 'PEGIN_TX_GET_STATUS_TX_ID';

// View getters
export const VIEW_GET_CURRENT_VIEW = 'VIEW_GET_CURRENT_VIEW';

// Session getters
export const SESSION_IN_TX_FLOW = 'SESSION_IN_TX_FLOW';

// environment
export const BTC_NETWORK_MAINNET = 'main';
export const BTC_NETWORK_TESTNET = 'test';
export const BITCOIN_TX_VERSION = 1;
// Ledger Apps
export const LEDGER_APP_BTC_TEST = 'Bitcoin Test';
export const LEDGER_APP_BTC = 'Bitcoin';

// eslint-disable-next-line no-shadow
export enum PegStatus {
  WAITING_CONFIRMATIONS = 'WAITING_CONFIRMATIONS',
  CONFIRMED = 'CONFIRMED',
  REJECTED_NO_REFUND = 'REJECTED_NO_REFUND',
  REJECTED_REFUND = 'REJECTED_REFUND',
  NOT_IN_BTC_YET = 'NOT_IN_BTC_YET',
  NOT_IN_RSK_YET = 'NOT_IN_RSK_YET',
  ERROR_NOT_A_PEGIN = 'ERROR_NOT_A_PEGIN',
  ERROR_BELOW_MIN = 'ERROR_BELOW_MIN',
  ERROR_UNEXPECTED = 'ERROR_UNEXPECTED',
}

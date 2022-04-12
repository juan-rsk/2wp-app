# 2wp-app
This is the front end application for 2-Way-Peg solution.
The solution will be a **web interface (this app)**, which integrates with a Rest API, which in turn communicates with internal services such as the blockchain node and databases. In addition, a daemon/worker will be created that will be responsible for obtaining data from the blockchain and changing the status of the transaction.

## Project setup
```
npm install
```
### Environment variables
Create a `.env.local` file in order to store locally the required variables for the app with the following fields:
```dotenv
VUE_APP_COIN='test' ## or main
VUE_APP_MANIFEST_EMAIL= <EMAIL_FOR_TREZOR_MANIFEST>
VUE_APP_MANIFEST_APP_URL= <URL_FOR_TREZOR_MANIFEST> ## 'https://2waypeg.rsk.co/'
VUE_APP_API_BASE_URL= <API_URL>
VUE_APP_RSK_NODE_HOST=<RSK_NODE_HOST>

VUE_APP_HOTJAR_ID=<HOT_JAR_ID_FOR_THE_ENVIRONMENT>
```
## Development mode
```
npm run serve
```

### Simple flow
```mermaid
sequenceDiagram
Front-end ->> Back-end: getInformation
Back-end-->>BLOCKCHAIN_NODE: getBalance
Back-end-->>BLOCKCHAIN_NODE: addTx
Back-end-->>Data-base: addTx
```
#### Interactions
```mermaid
graph LR
A[Front-end] -- Rest --> B{API}
B --> E((BLOCKCHAIN_NODE))

B --> D((Data-base))
C{Daemon} --> D
C --> E
```

### Check npm and node versions
```sh
npm -version
6.14.16
```

```sh
node -v
v14.19.1
```

## Deployment
```shell
docker-compose up
```

## Report Security Vulnerabilities

To report a vulnerability, please use the [vulnerability reporting guideline](./SECURITY.md) for details on how to do it.

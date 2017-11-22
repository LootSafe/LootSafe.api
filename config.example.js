const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)

module.exports = {
  port: 1337,
  version: 1,
  debug: true,
  db: 'LootSafe',  
  ethereum: {
    account: web3.eth.accounts[0],
    testnet: true,
    chain: 'testrpc',
    provider: 'http://localhost:8545'
  },
  addresses: {
    StandardToken: "0x0000000000000000000000000000000000000000",
    Item: "0x0000000000000000000000000000000000000000",
    Meta: "0x0000000000000000000000000000000000000000",
    Trade: "0x0000000000000000000000000000000000000000",
    LootBox: "0x0000000000000000000000000000000000000000",
    LootSafe: "0x0000000000000000000000000000000000000000",
    CoreToken: "0x0000000000000000000000000000000000000000"
  },
  accessControl: {
    allowedOrigins: ['localhost'],
    key: 'sha1$7f408b79$1$02fdd7ee5f25861e9ed1af83bf06124c52b3aec6'
  },
  yubico: {
    enabled: true,
    clientId: 35374,
    secret: 'jAOPLIZfzZImv106iC1lDscTJxQ='
  }
}
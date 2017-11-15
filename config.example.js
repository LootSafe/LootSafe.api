const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)


module.exports = {
  port: 1337,
  version: 1,
  debug: true,
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
    BlockBench: "0x0000000000000000000000000000000000000000",
    CoreToken: "0x0000000000000000000000000000000000000000"
  },
  accessControl: {
    allowedOrigins: ['localhost'],
    key: 'abc123'
  }
}
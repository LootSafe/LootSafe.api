/**
 * Application Configuration
 *
 * @cli Arguments
 * argv[2] | apiPort     | The Local Port that this API will bind to
 * argv[3] | gethHost    | The Hostname of the Geth Node this API will connect to
 * argv[4] | gethPort    | The Port to use when connecting to the Geth Host
 * argv[5] | gethProt    | The Protocol to use when connecting to the Geth Host
 * argv[6] | gethChain   | The Chain ID to use when interacting with the Geth Host
 * argv[7] | gethTestnet | Determines if the API will use Testnet or Mainnet
 *
 * @example Command: `node api 1337 localhost 8545 http testrpc testnet`
 * apiPort = 1337
 * gethHost = 'localhost'
 * gethPort = 8545
 * gethProt = 'http'
 * gethChain = 'testrpc'
 * gethTestnet = true
 */
const apiPort = process.argv[2] || 1337
const gethHost = process.argv[3] || 'localhost'
const gethPort = process.argv[4] || '8545'
const gethProt = process.argv[5] || 'http'
const gethChain = process.argv[6] || 'testrpc'
const gethTestnet = !process.argv[7] || process.argv[7] === 'testnet'
const gethUri = `${gethProt}://${gethHost}:${gethPort}`

const Web3 = require('web3')
const provider = new Web3.providers.HttpProvider(gethUri)
const web3 = new Web3(provider)

module.exports = {
  port: apiPort,
  version: 1,
  debug: true,
  cacheInterval: 100000,
  prefix: '',
  db: 'LootSafe',
  ethereum: {
    account: web3.eth.accounts[0],
    testnet: gethTestnet,
    chain: gethChain,
    provider: gethUri
  },
  addresses: {
    StandardToken: '0x0000000000000000000000000000000000000000',
    Item: '0x0000000000000000000000000000000000000000',
    Meta: '0x0000000000000000000000000000000000000000',
    Trade: '0x0000000000000000000000000000000000000000',
    LootBox: '0x0000000000000000000000000000000000000000',
    LootSafe: '0x0000000000000000000000000000000000000000',
    CoreToken: '0x0000000000000000000000000000000000000000'
  },
  accessControl: {
    allowedOrigins: ['localhost'],
    key: 'sha1$7f408b79$1$02fdd7ee5f25861e9ed1af83bf06124c52b3aec6'
  },
  yubico: {
    enabled: false,
    clientId: 35374,
    secret: 'jAOPLIZfzZImv106iC1lDscTJxQ='
  }
}

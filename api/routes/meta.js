const Web3 = require('web3')
const {
  ethereum,
  addresses
} = require('../../config')

const provider = new Web3.providers.HttpProvider(ethereum.provider)
const web3 = new Web3(provider)

const {
  name,
  version,
  author,
  license
} = require('../../package.json')

const contracts = (ethereum.testnet) ? require('../../contracts/contracts.json') : addresses

const uptime = Date.now()

// Returns general purpose information about the app
module.exports = (ctx) => {
  ctx.body = {
    connected: web3.isConnected() || false,
    name,
    version,
    author,
    license,
    'uptime(ms)': Date.now() - uptime,
    ethereum,
    contracts
  }
}

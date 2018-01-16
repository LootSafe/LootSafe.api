const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider(config.ethereum.provider)
const web3 = new Web3(provider)

const {
  name,
  version,
  author,
  license
} = require('../../package.json')

const contracts = (config.ethereum.testnet) ? require('../../contracts/contracts.json') : config.addresses

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
    ethereum: config.ethereum,
    contracts
  }
}

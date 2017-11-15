const {
  name,
  version,
  author,
  license
} = require('../../package.json')

const {
  ethereum,
  addresses
} = require('../../config')

const contracts = (ethereum.testnet) ? require('../../contracts/contracts.json') : addresses

const uptime = Date.now()

// Returns general purpose information about the app
module.exports = (ctx) => {
  ctx.body = {
    name,
    version,
    author,
    license,
    ['uptime(ms)']: Date.now() - uptime,
    ethereum,
    contracts
  }
}
const { getInstance } = require('../../modules')

/**
 * Get the token balance of an address
 */
module.exports = (address) => {
  return getInstance('CoreToken').then(async instance => {
    return instance.balanceOf.call(address)
  })
}

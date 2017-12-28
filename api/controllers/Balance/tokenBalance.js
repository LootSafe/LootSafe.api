const { getInstance } = require('../../modules')

/**
 * Get address' token balance
 * @route
 */
module.exports = (address) => {
  return getInstance('CoreToken').then(async instance => {
    return instance.balanceOf.call(address)
  })
}

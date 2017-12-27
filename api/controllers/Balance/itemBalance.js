const { getInstance } = require('../../modules')

/**
 * Get address' item balance
 * @route
 */
module.exports = (itemAddress, address) => {
  return getInstance('Item', itemAddress).then(async instance => {
    return instance.balanceOf.call(address)
  })
}
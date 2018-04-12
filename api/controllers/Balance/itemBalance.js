const { getInstance } = require('../../modules')

/**
 * Get address' item balance
 * @route
 */
module.exports = (itemAddress, address) => {
  return getInstance('Item', itemAddress).then(async instance => {
    return instance.balanceOf.call(address)
  }).catch(e => {
    return {
      status: 404,
      message: "I couldn't find that item, please check the address provided is the address of a deployed item."
    }
  })
}

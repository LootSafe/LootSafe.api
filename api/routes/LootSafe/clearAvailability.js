const { clearAvailability, getItems } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Clear future distrobution of an item
 * @constructor
 * @param {string} itemAddress - The address of the item
 */
module.exports = async (ctx) => {
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const items = await getItems()
    const decoded = items.map(item => web3.toUtf8(item))
    
    const req = ctx.request.body
    const itemAddress = req.itemAddress
    const to = req.to

    // TODO fix this
    //if (decoded.includes(name)) {
      const clearAvailabilityResponse = await clearAvailability(itemAddress)
      ctx.status = 200
      ctx.body = {
        status: 200,
        message: "Cleared available supply of item",
        data: clearAvailabilityResponse
      }
    /*} else {
      ctx.body = {
        status: 404,
        message: 'Item not found'
      }
    }*/
  } else {
    ctx.status = 401
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

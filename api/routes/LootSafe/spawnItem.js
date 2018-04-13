const { spawnItem, getItems } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')
const { addressExists } = require('../../modules')

/**
 * Give an item to a player
 * @constructor
 * @param {string} name - The name of the item
 * @param {string} to - The address to send to
 */
module.exports = async (ctx) => {
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  
  if (access) {
    const items = await getItems()
    const decoded = items.map(item => web3.toUtf8(item))

    const req = ctx.request.body
    const itemAddress = req.itemAddress
    const to = req.to

    //if (decoded.includes(name)) {
      const spawnItemResponse = await spawnItem(itemAddress, to)
      ctx.status = 200
      ctx.body = {
        status: 200,
        message: "Spawned one item",
        data: spawnItemResponse
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

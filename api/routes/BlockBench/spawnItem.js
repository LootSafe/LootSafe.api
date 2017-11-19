const { spawnItem, getItems } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = async (ctx) => {
  if (ctx.request.headers && ctx.request.headers.key && checkAccess(ctx.request.headers.key)) {
    const items = await getItems()
    const decoded = items.map(item => web3.toUtf8(item))
    
    const req = ctx.request.body
    const name = req.name
    const to = req.to

    if (decoded.includes(name)) {
      const spawnItemResponse = await spawnItem(name, to)
      ctx.body = {
        status: 404,
        message: "Spawned one item",
        tx: spawnItemResponse
      }
    } else {
      ctx.body = {
        status: 404,
        message: 'Item not found'
      }
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}
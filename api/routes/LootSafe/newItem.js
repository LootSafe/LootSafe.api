const { newItem } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Creates a new item.
 * @route
 * @param {string} name - The name of the item
 * @param {string} id - The uint8 id of the item
 * @param {number} totalSupply - The total available items
 * @param {string} skin - The ID of the skin (optional)
 * @param {string} metadata - The metadata for this item (optional)
 */
module.exports = async ctx => {
  const req = ctx.request.body
  const name = req.name
  const id = req.id
  const totalSupply = req.totalSupply
  const skin = req.skin || 'default'
  const metadata = req.metadata || 'no_metadata'
  const symbol = req.symbol || 'LSIC'

  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    if (name.length > 8) {
      ctx.body = {
        status: 500,
        message: 'Name exceeds length limit, please limit your name to 8 characters.'
      }
    } else {
      const newItemResponse = await newItem(
        name,
        id,
        totalSupply,
        skin,
        metadata,
        symbol
      )

      ctx.body = newItemResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

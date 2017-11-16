const { newItem } = require('../../controllers')
const { accessControl } = require('../../../config')


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
  if (ctx.request.headers && ctx.request.headers.key === accessControl.key) {
    const newItemResponse = await newItem(
      name,
      id,
      totalSupply,
      skin,
      metadata
    )

    ctx.body = newItemResponse
  }
}
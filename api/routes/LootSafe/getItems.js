const { getItems } = require('../../controllers')

/**
 * Get the available items
 * @route
 */
module.exports = async ctx => {
  const items = await getItems()
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Items fetched',
    data: items
  }
}

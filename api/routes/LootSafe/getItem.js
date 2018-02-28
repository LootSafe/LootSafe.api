const { getItem } = require('../../controllers')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = async (ctx, item) => {
  const itemResponse = await getItem(false, item)

  ctx.body = {
    status: 200,
    message: 'Item fetched',
    data: itemResponse
  }
}

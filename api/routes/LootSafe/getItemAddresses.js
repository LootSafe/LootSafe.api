const { getItemAddresses } = require('../../controllers')

/**
 * Get the addresses of all items
 * @route
 */
module.exports = async ctx => {
  const items = await getItemAddresses()

  ctx.body = {
    status: 200,
    message: 'Item addresses fetched',
    data: {
      items
    }
  }
}
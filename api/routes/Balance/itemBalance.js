const { itemBalance } = require('../../controllers')

/**
 * Get item balance
 * @route
 */
module.exports = async (ctx, item, address) => {
  const balance = await itemBalance(item, address)

  ctx.body = {
    status: 200,
    message: 'Item balance fetched',
    data: balance
  }
}
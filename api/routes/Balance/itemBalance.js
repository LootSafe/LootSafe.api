const { itemBalance } = require('../../controllers')

/**
 * Get item balance
 * @route
 */
module.exports = async (ctx, item, address) => {
  const balance = await itemBalance(item, address)

  ctx.status = balance.status || 200
  ctx.body = {
    status: balance.status || 200,
    message: 'Item balance fetched',
    data: balance
  }
}

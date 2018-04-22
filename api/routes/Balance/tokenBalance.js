const { tokenBalance } = require('../../controllers')

/**
 * Get token balance
 * @route
 */
module.exports = async (ctx, address) => {
  const balance = await tokenBalance(address)

  ctx.status = balance.status || 200
  ctx.body = {
    status: balance.status || 200,
    message: 'Token balance fetched',
    data: balance
  }
}

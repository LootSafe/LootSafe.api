const { tokenBalance } = require('../../controllers')

/**
 * Get token balance
 * @route
 */
module.exports = async (ctx, address) => {
  const balance = await tokenBalance(address)

  ctx.body = {
    status: 200,
    message: 'Token balance fetched',
    data: balance
  }
}

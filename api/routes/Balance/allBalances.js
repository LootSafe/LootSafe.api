const { allBalances } = require('../../controllers')

/**
 * Get item balances
 * @route
 */
module.exports = async (ctx, address) => {
  const balance = await allBalances(address)

  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Item balances fetched',
    data: balance
  }
}

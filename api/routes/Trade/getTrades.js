const { getTrades } = require('../../controllers')

/**
 * Get the current trades
 * @route
 * @param {string} merchant - Merchant address
 */
module.exports = async (ctx, merchant) => {
  const tradesResponse = await getTrades(merchant)

  ctx.body = {
    status: 200,
    message: 'Trades fetched',
    data: tradesResponse
  }
}
const { getTrade } = require('../../controllers')

/**
 * Get a trade from a merchant
 * @route
 * @param {string} merchant - Merchant address
 * @param {string} tradeId - Trade ID to get from this merchant
 */
module.exports = async (ctx, merchant, tradeId) => {
  const tradeResponse = await getTrade(merchant, tradeId)

  ctx.body = {
    status: 200,
    message: 'Trade fetched',
    data: tradeResponse
  }
}

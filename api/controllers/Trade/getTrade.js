const { getInstance } = require('../../modules')

/**
 * Get the current fee to trade
 * @route
 * @param {string} merchant - Merchant address
 * @param {string} tradeId - Trade ID to get from this merchant
 */
module.exports = (merchant, tradeId) => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getTrade.call(merchant, tradeId)
  })
}
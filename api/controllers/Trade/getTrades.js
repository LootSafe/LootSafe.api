const { getInstance } = require('../../modules')

/**
 * Get the current fee to trade
 * @route
 * @param {string} merchant - Merchant address
 */
module.exports = (merchant) => {
  return getInstance('LootSafe').then(async instance => {
    return instance.tradeCost.call(merchant)
  })
}
const { getInstance } = require('../../modules')

/**
 * Get the current fee to trade
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(async instance => {
    return instance.tradeCost.call()
  })
}

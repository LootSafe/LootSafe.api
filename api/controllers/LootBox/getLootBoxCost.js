const { getInstance } = require('../../modules')

/**
 * Get the current fee to open a lootbox
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(async instance => {
    return instance.lootBoxCost.call()
  })
}
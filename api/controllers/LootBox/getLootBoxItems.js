const { getInstance } = require('../../modules')

/**
 * Get the chances of getting each type of item
 * @route
 * @param {string} rarity - rarity group to look up
 */
module.exports = (rarity) => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getLootBoxItems.call(rarity)
  })
}

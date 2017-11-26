const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Add an item to the lootbox loot table
 * @constructor
 * @param {number} epic - The chance of getting the item
 * @param {number} rare - The chance of getting the item
 * @param {number} uncommon - The chance of getting the item
 */
module.exports = (epic = 1, rare = 3, uncommon = 20) => {
  return getInstance('LootSafe').then(instance => {
    return instance.updateChance(
      epic,
      rare,
      uncommon,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
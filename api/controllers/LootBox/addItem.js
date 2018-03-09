const { getInstance } = require('../../modules')

const {
  ethereum
} = require('../../../config')

/**
 * Add an item to the lootbox loot table
 * @constructor
 * @param {string} item - Resulting item
 * @param {string} rarity - Rarity of the item in the lootbox
 */
module.exports = (item = '0x0', rarity = 'common') => {
  return getInstance('LootSafe').then(instance => {
    console.log('item', item);
    console.log('rarity', rarity);
    return instance.addItem(
      item,
      rarity,
      {gas: 3000000, from: ethereum.account}
    )
  })
}

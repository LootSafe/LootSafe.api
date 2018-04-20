const { getInstance } = require('../../modules')

const {
  ethereum
} = require('../../../config')

/**
 * Remove a crafting recipe
 * @constructor
 * @param {string} item - Resulting item
 */
module.exports = (item = '0x0') => {
  return getInstance('LootSafe').then(instance => {
    return instance.removeRecipe(
      item,
      {gas: 3000000, from: ethereum.account}
    )
  })
}

const { getInstance } = require('../../modules')

const {
  ethereum
} = require('../../../config')

/**
 * Add a new crafting recepe
 * @constructor
 * @param {string} result - Resulting item
 * @param {array} materials - Materials required to craft
 * @param {array} counts - Count of each item to craft
 */
module.exports = (result = '0x0', materials = [], counts = []) => {
  return getInstance('LootSafe').then(instance => {
    return instance.newRecipe(
      result,
      materials,
      counts,
      {gas: 3000000, from: ethereum.account}
    )
  })
}

const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Add a new crafting recepie
 * @constructor
 * @param {string} item - Resulting item
 * @param {array} rewards - Materials required to craft
 * @param {array} counts - Count of each item to craft
 */
module.exports = (item = '0x0', rewards = [], counts = []) => {
  return getInstance('LootSafe').then(instance => {
    return instance.newDeconstructionRecipie(
      item,
      rewards,
      counts,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Give an item to a player
 * @constructor
 * @param {string} name - The name of the item
 * @param {string} to - The address to send to
 */
module.exports = (name, to = '0x0') => {
  return getInstance('LootSafe').then(instance => {
    return instance.spawnItem(
      name,
      to,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
const { getInstance } = require('../../modules')

/**
 * Give an item to a player
 * @constructor
 * @param {string} itemAddress - The address of the item
 * @param {string} to - The address to send to
 */
module.exports = (itemAddress, to = '0x0') => {
  return getInstance('LootSafe').then(instance => {
    return instance.spawnItem(
      itemAddress,
      to,
      {gas: 3000000, from: config.ethereum.account}
    )
  })
}

const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Open a lootbox cost
 * @constructor
 * @param {number} cost - The cost to open a lootbox
 */
module.exports = (cost = 1) => {
  return getInstance('LootSafe').then(instance => {
    return instance.updateLootBoxCost(
      cost,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
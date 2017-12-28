const { getInstance } = require('../../modules')

const {
  ethereum
} = require('../../../config')

/**
 * Open a lootbox cost
 * @constructor
 * @param {number} cost - The cost to open a trade
 */
module.exports = (cost = 1) => {
  return getInstance('LootSafe').then(instance => {
    return instance.updateTradeCost(
      cost,
      {gas: 3000000, from: ethereum.account}
    )
  })
}

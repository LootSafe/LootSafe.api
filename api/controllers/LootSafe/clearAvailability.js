const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Clear future distrobution of an item
 * @constructor
 * @param {string} name - The name of the item
 */
module.exports = (name) => {
  return getInstance('LootSafe').then(instance => {
    return instance.clearAvailability(
      name,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
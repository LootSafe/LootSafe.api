const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Remove a crafting recepie
 * @constructor
 * @param {string} item - Resulting item
 */
module.exports = (item = '0x0') => {
  return getInstance('LootSafe').then(instance => {
    return instance.removeRecipie(
      item,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
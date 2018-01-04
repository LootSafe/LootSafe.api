const { getInstance } = require('../../modules')

const {
  ethereum
} = require('../../../config')

/**
 * Creates a new item.
 * @constructor
 * @param {string} name - The name of the item
 * @param {string} id - The uint8 id of the item
 * @param {number} totalSupply - The total available items
 * @param {string} skin - The ID of the skin (optional)
 * @param {string} metadata - The metadata for this item (optional)
 */
module.exports = (name, id, supply, skin, metadata, symbol = 'LSIC') => {
  return new Promise(resolve => {
    console.log(name,
      id,
      supply,
      skin,
      metadata,
      symbol,
      {gas: 3000000, from: ethereum.account})
    getInstance('LootSafe').then(instance => {
      instance.createItem(
        name,
        id,
        supply,
        skin,
        metadata,
        symbol,
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        resolve({
          status: 200,
          message: 'Created new item',
          data: tx
        })
      }).catch(() => {
        resolve({
          status: 500,
          message: 'Failed to deploy, have you already deployed this contract?'
        })
      })
    })
  })
}

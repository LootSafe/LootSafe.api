const { statefulCall } = require('../../modules')

const {
  ethereum,
  addresses
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
module.exports = (name, id, supply, skin, metadata) => {
  return new Promise(resolve => {
    statefulCall('BlockBench').then(instance => {
      instance.createItem(
        name,
        id,
        supply,
        skin,
        metadata,
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        resolve({
          status: 200,
          message: 'Created new item',
          tx
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
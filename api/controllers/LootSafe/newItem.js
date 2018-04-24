const { getInstance, createUpdateItem } = require('../../modules')

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
 * @param {string} symbol - The symbol of this item
 */
module.exports = (name, id, supply, skin, metadata, symbol = 'LSIC') => {
  return new Promise(resolve => {
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
        console.log('tx!', tx);
        // TODO: Save to cache as mined
        createUpdateItem({ id, address: tx.logs[0].args['itemAddress'] })
      }).catch(() => {
        // TODO: Save to cache as failed
        console.warn('FUCK!')
      })

      createUpdateItem({
        name,
        id,
        totalSupply: supply,
        skin,
        metadata,
        symbol,
        owner: '0x0'
      })

      resolve({
        status: 200,
        message: 'Your item creation is being mined, once mined it will be deployed to the network!'
      })
    })
  })
}

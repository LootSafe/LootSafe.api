const { statefulCall } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

module.exports = (name, id, supply, skin, metadata) => {
  return new Promise(resolve => {
    statefulCall('BlockBench').then(instance => {
      instance.createItem(
        name,
        id,
        supply,
        skin,
        metadata,
        {gas: 3000000, from: ethereum.address}
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
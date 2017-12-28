const { simpleCall, getInstance } = require('../../modules')
const getItem = require('../LootSafe/getItem')

/**
 * Get the balances from all items
 * @route
 */
module.exports = (address) => {
  return simpleCall('LootSafe', 'getItems').then(items => {
    return simpleCall('LootSafe', 'getItems').then(data => {
      return Promise.all([...data.map(item => getItem(item))]).then(items => {
        return Promise.all([
          ...items.map(item => {
            return getInstance('Item', item.address).then(async instance => {
              return instance.balanceOf.call(address).then(balance => {
                return {
                  [item.address]: balance
                }
              })
            })
          })
        ])
      })
    })
  })
}

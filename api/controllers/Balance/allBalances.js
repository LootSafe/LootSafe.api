const { simpleCall, getInstance } = require('../../modules')

/**
 * Get the balances from all items
 * @route
 */
module.exports = (address) => {
  return simpleCall('LootSafe', 'getItems').then(items => {
    console.log('items')
    return Promise.all([
      ...items.map(item => {
        console.log('item')
        return getInstance('Item', item).then(async instance => {
          return {
            [item]: instance.balanceOf.call(address)
          }
        })
      })
    ])
  })
}
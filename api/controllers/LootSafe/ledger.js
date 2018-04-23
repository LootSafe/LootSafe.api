const { simpleCall } = require('../../modules')
const getItem = require('./getItem')
const Web3 = require('web3')
const web3 = new Web3()

/**
 * Get the available items
 * @route
 */
module.exports = () => {
  return simpleCall('LootSafe', 'getItems').then(data => {
    return Promise.all([...data.map(item => {
      return getItem(item).then(singleItem => {
        const _parsed = {
          id: web3.toUtf8(singleItem.id),
          skin: web3.toUtf8(singleItem.skin),
          symbol: web3.toUtf8(singleItem.symbol),
          name: web3.toUtf8(singleItem.name)
        }
        return Object.assign({}, singleItem, {_parsed})
      })
    })])
  })
}

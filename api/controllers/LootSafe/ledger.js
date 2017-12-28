const { simpleCall } = require('../../modules')
const getItem = require('./getItem')

/**
 * Get the available items
 * @route
 */
module.exports = () => {
  return simpleCall('LootSafe', 'getItems').then(data => {
    return Promise.all([...data.map(item => getItem(item))])
  })
}

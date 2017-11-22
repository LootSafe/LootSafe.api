const { simpleCall } = require('../../modules')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = () => {
  return simpleCall('LootSafe', 'getTokenAddress')
}
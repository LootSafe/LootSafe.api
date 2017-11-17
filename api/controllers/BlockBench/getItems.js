const { simpleCall } = require('../../modules')

/**
 * Get the available items
 * @route
 */
module.exports = () => {
  return simpleCall('BlockBench', 'getItems')
}
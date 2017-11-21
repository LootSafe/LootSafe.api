const { simpleCall } = require('../../modules')

/**
 * Get the available items to craft
 * @route
 */
module.exports = () => {
  return simpleCall('BlockBench', 'craftables')
}
const { statelessCall } = require('../../modules')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = () => {
  return statelessCall('BlockBench', 'getTokenAddress')
}
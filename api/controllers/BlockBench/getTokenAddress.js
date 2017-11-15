const { statelessCall } = require('../../modules')

module.exports = () => {
  return statelessCall('BlockBench', 'getTokenAddress')
}
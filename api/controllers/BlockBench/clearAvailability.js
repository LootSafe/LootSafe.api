const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Get the available items
 * @route
 */
module.exports = (name) => {
  return getInstance('BlockBench').then(instance => {
    return instance.clearAvailability(
      name,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
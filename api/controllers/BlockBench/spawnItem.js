const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Get the available items
 * @route
 */
module.exports = (name, to = '0x0') => {
  return getInstance('BlockBench').then(instance => {
    return instance.spawnItem(
      name,
      to,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
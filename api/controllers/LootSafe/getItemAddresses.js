const { getInstance } = require('../../modules')

/**
 * Get the available items addresses
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(instance => {
    return instance.getItemAddresses.call()
  })
}
const { getInstance } = require('../../modules')

/**
 * Get the available items to deconstruct
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getDeconstructables.call()
  })
}

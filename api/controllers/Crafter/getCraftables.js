const { getInstance } = require('../../modules')

/**
 * Get the available items to craft
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getCraftables.call()
  })
}

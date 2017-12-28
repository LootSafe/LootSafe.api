const { getInstance } = require('../../modules')

/**
 * Get the available items to craft
 * @route
 */
module.exports = (item) => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getRecipie.call(item)
  })
}

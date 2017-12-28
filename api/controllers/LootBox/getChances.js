const { getInstance } = require('../../modules')

/**
 * Get the chances of getting each type of item
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(async instance => {
    return instance.getChances.call()
  })
}

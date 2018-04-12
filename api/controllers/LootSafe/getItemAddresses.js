const { getInstance } = require('../../modules')

/**
 * Get the available items addresses
 * @route
 */
module.exports = () => {
  return getInstance('LootSafe').then(instance => {
    return instance.getItemAddresses.call()
  }).catch(e => {
    return {
      status: 404,
      message: "I couldn't find that instance, please check the address provided."
    }
  })
}

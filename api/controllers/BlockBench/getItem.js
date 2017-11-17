const { getInstance } = require('../../modules')

/**
 * Get the available items
 * @route
 */
module.exports = (item) => {
  return getInstance('BlockBench').then(instance => {
    return instance.getItem.call(item)
  })
}
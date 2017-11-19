const { getInstance } = require('../../modules')

/**
 * Get specific item address
 * @constructor
 * @param {string} item - The item name
 */
module.exports = (item) => {
  return getInstance('BlockBench').then(instance => {
    return instance.getItem.call(item)
  })
}
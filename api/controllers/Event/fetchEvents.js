const { getInstance } = require('../../modules')
const { EventSchema } = require('../../schemas')

/**
 * Get the available items to deconstruct
 * @route
 */
module.exports = () => {
  return new Promise(resolve => {
    EventSchema.find((err, events) => {
      resolve(events)
    })
  })
}
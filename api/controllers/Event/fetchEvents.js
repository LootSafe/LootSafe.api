const { EventSchema } = require('../../schemas')

/**
 * Get the available items to deconstruct
 * @route
 */
module.exports = () => {
  return new Promise(resolve => {
    EventSchema.find((err, events) => {
      if (err) {
        console.log('Error fetching events', err)
      }
      resolve(events)
    })
  })
}

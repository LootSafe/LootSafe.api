const { ItemSchema } = require('../schemas')
const addresses  = require('../../contracts/contracts.json')

module.exports = (item) => {
  return ItemSchema.find((err, items) => {
    if (err) {
      console.log('Error getting items', err)
    }
    return items
  })
}

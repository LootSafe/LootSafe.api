const { ItemSchema } = require('../schemas')
const addresses  = require('../../contracts/contracts.json')

module.exports = (item) => {
  ItemSchema.findOne({ id: item.id }, (err, i) => {
    if (err) {
      console.log('Error saving item', err)
    }
    if (!i) {
      const newItem = new ItemSchema({
        address: '0x0',
        name: item.name,
        id: item.id,
        skin: item.skin,
        metadata: item.metadata,
        created: Date.now(),
        owner: addresses["LootSafe"],
        totalSupply: item.totalSupply,
        finalSupply: 0,
      })

      newItem.save()
    } else {
      // update item
      i.address = item.address
      i.save()
    }
  })
}

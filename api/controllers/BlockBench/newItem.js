const { statefulCall } = require('../../modules')

module.exports = (name, id, supply, skin, metadata) => {
  return statefulCall('BlockBench').then(instance => {
    console.log(name)
    console.log(id)
    console.log(supply)
    console.log(skin)
    console.log(metadata)
    instance.createItem(
      name,
      id,
      supply,
      skin,
      metadata
    )
  })
}
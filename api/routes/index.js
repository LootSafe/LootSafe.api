module.exports = {
  meta: require('./meta'),
  getTokenAddress: require('./BlockBench/getTokenAddress'),
  newItem: require('./BlockBench/newItem'),
  getItems: require('./BlockBench/getItems'),
  getItem: require('./BlockBench/getItem'),
  spawnItem: require('./BlockBench/spawnItem'),
  clearAvailability: require('./BlockBench/clearAvailability'),
  // Crafter
  newRecipie: require('./Crafter/newRecipie'),
  getCraftables: require('./Crafter/getCraftables')
}
module.exports = {
  getTokenAddress: require('./LootSafe/getTokenAddress'),
  newItem: require('./LootSafe/newItem'),
  getItems: require('./LootSafe/getItems'),
  getItem: require('./LootSafe/getItem'),
  spawnItem: require('./LootSafe/spawnItem'),
  clearAvailability: require('./LootSafe/clearAvailability'),
  issueTokens: require('./LootSafe/issueTokens'),
  // Crafter
  newRecipie: require('./Crafter/newRecipie'),
  newDeconstructionRecipie: require('./Crafter/newDeconstructionRecipie'),
  getRecipie: require('./Crafter/getRecipie'),
  getCraftables: require('./Crafter/getCraftables'),
  getDeconstrucatbles: require('./Crafter/getCraftables'),
  getDeconstructionRecipie: require('./Crafter/getDeconstructionRecipie'),
  removeRecipie: require('./Crafter/removeRecipie')
}
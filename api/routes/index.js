module.exports = {
  meta: require('./meta'),
  getTokenAddress: require('./LootSafe/getTokenAddress'),
  newItem: require('./LootSafe/newItem'),
  getItems: require('./LootSafe/getItems'),
  getItem: require('./LootSafe/getItem'),
  spawnItem: require('./LootSafe/spawnItem'),
  clearAvailability: require('./LootSafe/clearAvailability'),
  // Crafter
  newRecipie: require('./Crafter/newRecipie'),
  newDeconstructionRecipie: require('./Crafter/newDeconstructionRecipie'),
  getRecipie: require('./Crafter/getRecipie'),
  getCraftables: require('./Crafter/getCraftables'),
  getDeconstructables: require('./Crafter/getDeconstructables'),
  getDeconstructionRecipie: require('./Crafter/getDeconstructionRecipie'),
  removeRecipie: require('./Crafter/removeRecipie'),
  // LootBox
  addItem: require('./LootBox/addItem'),
  getChances: require('./LootBox/getChances'),
  getLootBoxItems: require('./LootBox/getLootBoxItems'),
  updateChance: require('./LootBox/updateChance'),
  updateLootBoxCost: require('./LootBox/updateLootBoxCost')
}
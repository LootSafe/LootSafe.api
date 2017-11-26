const { getDeconstructionRecipie } = require('../../controllers')

/**
 * Get recipie
 * @route
 */
module.exports = async (ctx, item) => {
  // TODO: ensure item is address, and an item in LootSafe
  const recipie = await getDeconstructionRecipie(item)

  ctx.body = {
    status: 200,
    message: 'Recipie fetched',
    data: recipie
  }
}
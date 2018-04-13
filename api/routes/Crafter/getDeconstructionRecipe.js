const { getDeconstructionRecipe } = require('../../controllers')

/**
 * Get recipie
 * @route
 */
module.exports = async (ctx, item) => {
  // TODO: ensure item is address, and an item in LootSafe
  const recipe = await getDeconstructionRecipe(item)

  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Recipe fetched',
    data: recipe
  }
}

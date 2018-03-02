const { getRecipe } = require('../../controllers')

/**
 * Get item recipe
 * @route
 */
module.exports = async (ctx, item) => {
  // TODO: Ensure item is address and in LootSafe
  const recipe = await getRecipe(item)

  ctx.body = {
    status: 200,
    message: 'Recipe fetched',
    data: recipe
  }
}

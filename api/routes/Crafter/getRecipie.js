const { getRecipie } = require('../../controllers')

/**
 * Get item recipie
 * @route
 */
module.exports = async (ctx, item) => {
  // TODO: Ensure item is address and in LootSafe
  const recipie = await getRecipie(item)

  ctx.body = {
    status: 200,
    message: 'Recipie fetched',
    data: recipie
  }
}

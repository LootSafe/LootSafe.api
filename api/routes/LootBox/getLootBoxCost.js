const { getLootBoxCost } = require('../../controllers')

/**
 * Get lootbox cost
 * @route
 */
module.exports = async (ctx) => {
  const cost = await getLootBoxCost()

  ctx.body = {
    status: 200,
    message: 'LootBox cost fetched',
    data: cost
  }
}

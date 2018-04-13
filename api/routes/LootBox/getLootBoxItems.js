const { getLootBoxItems } = require('../../controllers')

/**
 * Get lootbox chances
 * @route
 * @param {string} rarity - rarity group to look up
 */
module.exports = async (ctx, rarity) => {
  const items = await getLootBoxItems(rarity)
  
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Items fetched',
    data: items
  }
}

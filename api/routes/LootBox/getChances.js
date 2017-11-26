const { getChances } = require('../../controllers')

/**
 * Get lootbox chances
 * @route
 */
module.exports = async (ctx) => {
  const chances = await getChances()

  ctx.body = {
    status: 200,
    message: 'Chances fetched',
    data: chances
  }
}
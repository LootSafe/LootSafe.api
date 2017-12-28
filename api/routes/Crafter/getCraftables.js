const { getCraftables } = require('../../controllers')

/**
 * Get craftable items
 * @route
 */
module.exports = async (ctx) => {
  const craftables = await getCraftables()

  ctx.body = {
    status: 200,
    message: 'Craftables fetched',
    data: craftables
  }
}

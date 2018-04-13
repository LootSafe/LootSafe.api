const { getCraftables } = require('../../controllers')

/**
 * Get craftable items
 * @route
 */
module.exports = async (ctx) => {
  const craftables = await getCraftables()

  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Craftables fetched',
    data: craftables
  }
}

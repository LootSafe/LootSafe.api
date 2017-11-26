const { getTradeCost } = require('../../controllers')

/**
 * Get trade cost
 * @route
 */
module.exports = async (ctx) => {
  const cost = await getTradeCost()

  ctx.body = {
    status: 200,
    message: 'Trade cost fetched',
    data: cost
  }
}
const { getDeconstrucatbles } = require('../../controllers')

/**
 * Get craftable items
 * @route
 */
module.exports = async (ctx) => {
  const deconstructables = await getDeconstrucatbles()

  ctx.body = {
    status: 200,
    message: 'Deconstructables fetched',
    data: deconstructables
  }
}
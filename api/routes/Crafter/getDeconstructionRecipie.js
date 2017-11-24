const { getDeconstructionRecipie } = require('../../controllers')

/**
 * Get recipie
 * @route
 */
module.exports = async (ctx, item) => {
  const recipie = await getDeconstructionRecipie(item)

  ctx.body = {
    status: 200,
    message: 'Recipie fetched',
    data: recipie
  }
}
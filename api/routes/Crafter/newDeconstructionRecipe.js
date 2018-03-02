const { newDeconstructionRecipe } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Add a new crafting recepie
 * @constructor
 * @param {string} result - Resulting item
 * @param {array} materials - Materials required to craft
 * @param {array} counts - Count of each item to craft
 */
module.exports = async ctx => {
  const req = ctx.request.body
  const item = req.item
  const rewards = req.rewards
  const counts = req.counts.map(i => parseInt(i))

  // TODO: Ensure addresses are valid, and item, and rewards, exist in the system

  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const newRecipeResponse = await newDeconstructionRecipe(
      item,
      rewards,
      counts
    )

    ctx.body = {
      status: 200,
      message: 'New deconstruction recipe added',
      data: newRecipeResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

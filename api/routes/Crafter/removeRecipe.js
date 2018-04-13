const { removeRecipe } = require('../../controllers')
const checkAccess = require('../../middleware/accessControl')

/**
 * Remove crafting recipie
 * @constructor
 * @param {string} item - Item to remove
 */
module.exports = async ctx => {
  const req = ctx.request.body
  const item = req.item

  // TODO: Ensure item is valid address

  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)

  if (access) {
    const removeRecipeResponse = await removeRecipe(
      item
    )

    ctx.status = 200
    ctx.body = {
      status: 200,
      message: 'Recipe removed',
      data: removeRecipeResponse
    }
  } else {
    ctx.status = 401
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

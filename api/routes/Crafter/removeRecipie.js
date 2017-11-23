const { removeRecipie } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Remove crafting recipie
 * @constructor
 * @param {string} item - Item to remove
 */
module.exports = async ctx => {
  const req = ctx.request.body
  const item = req.item

  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)

  if (access) {
    const removeRecipieResponse = await removeRecipie(
      item
    )

    ctx.body = {
      status: 200,
      message: 'Recipie removed',
      data: removeRecipieResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}
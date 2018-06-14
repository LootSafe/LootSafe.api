const { addItem } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')
const { addressExists } = require('../../modules')
/**
 * Add a new crafting recepie
 * @constructor
 * @param {string} item - item to add to loot table
 * @param {string} rarity - Rarity of item
 */
module.exports = async ctx => {
  const req = ctx.request.body
  const item = req.item
  const rarity = req.rarity

  const itemExists = await addressExists(item)

  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    if (itemExists) {
      await addItem(
        item,
        rarity
      )

      ctx.status = 200
      ctx.body = {
        status: 200,
        message: 'New item added to loot table.',
        data: addItemRespopnse
      }
    } else {
      ctx.status = 404
      ctx.body = {
        status: 404,
        message: 'An item by the supplied address does not exist.'
      }
    }
  } else {
    ctx.status = 401
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

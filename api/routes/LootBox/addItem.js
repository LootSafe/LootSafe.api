const { addItem } = require('../../controllers')
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
      const addItemRespopnse = await addItem(
        item,
        rarity
      )

      ctx.body = {
        status: 200,
        message: 'New item added to loot table.',
        data: addItemRespopnse
      }
    } else {
      ctx.body = {
        status: 404,
        message: 'An item by the supplied address does not exist.'
      }
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

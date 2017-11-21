const { newRecipie } = require('../../controllers')
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
  const result = req.result
  const materials = req.materials
  const counts = req.counts.map(i => parseInt(i))

  console.log(materials)
  console.log(counts)
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const newRecipieResponse = await newRecipie(
      result,
      materials,
      counts
    )

    console.log(newRecipieResponse)
    ctx.body = {
      status: 200,
      message: 'New recipie added',
      data: newRecipieResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}
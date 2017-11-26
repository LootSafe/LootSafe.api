const { updateLootBoxCost } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Update loot box cost
 * @route
 * @param {number} cost - loot box cost
 */
module.exports = async (ctx, cost) => {
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const costResponse = await updateLootBoxCost(cost)
    
    ctx.body = {
      status: 200,
      message: 'Updated lootbox cost',
      data: costResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}
const { updateChance } = require('../../controllers')
const checkAccess = require('../../middleware/accessControl')

/**
 * Update loot box cost
 * @route
 * @param {number} cost - loot box cost
 */
module.exports = async (ctx, epic, rare, uncommon) => {
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const chanceResponse = await updateChance(epic, rare, uncommon)
    
    ctx.body = {
      status: 200,
      message: 'Updated lootbox chances',
      data: chanceResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

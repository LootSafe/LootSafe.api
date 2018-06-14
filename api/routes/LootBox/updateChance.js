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
    updateChance(epic, rare, uncommon)
    
    ctx.status = 200
    ctx.body = {
      status: 200,
      message: 'Updated lootbox chances',
      data: {
        epic, 
        rare, 
        uncommon
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

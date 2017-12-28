const { updateTradeCost } = require('../../controllers')
const { accessControl } = require('../../../config')
const checkAccess = require('../../middleware/accessControl')

/**
 * Update trade cost
 * @route
 * @param {number} cost - trade cost
 */
module.exports = async (ctx, cost) => {
  const access = await checkAccess(ctx.request.headers.key, ctx.request.headers.otp)
  if (access) {
    const costResponse = await updateTradeCost(cost)
    
    ctx.body = {
      status: 200,
      message: 'Updated trade cost',
      data: costResponse
    }
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

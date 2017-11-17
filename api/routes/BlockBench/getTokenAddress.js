const { getTokenAddress } = require('../../controllers')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = async ctx => {
  const tokenAddress = await getTokenAddress()
  ctx.body = {
    status: 200,
    tokenAddress
  }
}
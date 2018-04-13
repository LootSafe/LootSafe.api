const { balanceOf } = require('../../controllers')

/**
 * Get the balance of an address
 * @route
 */
module.exports = async (ctx, address) => {
  const balanceOfResponse = await balanceOf(address)
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Balance fetched',
    data: balanceOfResponse
  }
}

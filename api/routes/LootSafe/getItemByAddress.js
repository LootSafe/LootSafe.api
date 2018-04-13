const { getItemByAddress } = require('../../controllers')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = async (ctx, address) => {
  const itemResponse = await getItemByAddress(address)
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Item fetched',
    data: itemResponse
  }
}

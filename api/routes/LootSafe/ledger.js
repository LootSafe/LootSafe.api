const { ledger } = require('../../controllers')

/**
 * Get the address of the utility token
 * @route
 */
module.exports = async (ctx) => {
  const itemResponse = await ledger()
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Items fetched',
    data: itemResponse
  }
}

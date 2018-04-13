const { getVaultBalance } = require('../../controllers')

/**
 * Get the balance of an address
 * @route
 */
module.exports = async (ctx) => {
  const getVaultBalanceResponse = await getVaultBalance()
  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Vault balance fetched',
    data: getVaultBalanceResponse
  }
}

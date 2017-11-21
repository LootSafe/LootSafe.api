const { getCraftables } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
/**
 * Get craftable items
 * @route
 */
module.exports = async (ctx) => {
  const craftables = await getCraftables()

  ctx.body = {
    status: 200,
    message: 'Item fetched',
    data: craftables
  }
}
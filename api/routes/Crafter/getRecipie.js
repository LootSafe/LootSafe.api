const { getRecipie } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
/**
 * Get craftable items
 * @route
 */
module.exports = async (ctx, item) => {
  const recipie = await getRecipie(item)

  ctx.body = {
    status: 200,
    message: 'Item fetched',
    data: recipie
  }
}
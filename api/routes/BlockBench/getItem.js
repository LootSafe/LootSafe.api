const { getItem } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()
/**
 * Get the address of the utility token
 * @route
 */
module.exports = async (ctx, item) => {
  const itemResponse = await getItem(item)

  ctx.body = {
    status: 200,
    message: 'Item fetched',
    itemResponse
  }
}
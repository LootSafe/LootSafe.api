const { getItems } = require('../../controllers')
const Web3 = require('web3')
const web3 = new Web3()

/**
 * Get the available items
 * @route
 */
module.exports = async ctx => {
  const items = await getItems()
  const decoded = items.map(item => web3.toUtf8(item))

  ctx.body = {
    status: 200,
    message: 'Items fetched',
    decoded
  }
}
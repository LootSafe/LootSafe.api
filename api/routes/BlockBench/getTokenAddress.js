const { getTokenAddress } = require('../../controllers')

module.exports = async ctx => {
  const tokenAddress = await getTokenAddress()
  ctx.body = {
    tokenAddress
  }
}
const { newItem } = require('../../controllers')

module.exports = async ctx => {
  const req = ctx.request.body
  const name = req.name
  const id = req.id
  const totalSupply = req.totalSupply
  const skin = req.skin || 'default'
  const metadata = req.metadata || 'no_metadata'

  if (name && id && totalSupply && skin && metadata) {
    const newItemResponse = await newItem(
      name,
      id,
      totalSupply,
      skin,
      metadata
    )
  
    ctx.body = {
      response: newItemResponse
    }
  } else {
    ctx.body = {
      status: 400,
      message: 'Missing or malformed data, please check your request body.'
    }
  }
}
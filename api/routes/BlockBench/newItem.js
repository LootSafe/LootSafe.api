const { newItem } = require('../../controllers')

module.exports = async ctx => {
  const req = ctx.request.body
  const name = req.name
  const id = req.id
  const totalSupply = req.totalSupply
  const skin = req.skin || 'default'
  const metadata = req.metadata || 'no_metadata'

  const newItemResponse = await newItem(
    name,
    id,
    totalSupply,
    skin,
    metadata
  )

  console.log(newItemResponse)

  ctx.body = newItemResponse
}
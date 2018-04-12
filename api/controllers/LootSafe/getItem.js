const { getInstance } = require('../../modules')

/**
 * Get specific item address
 * @constructor
 * @param {string} item - The item name
 */
module.exports = async (item, address) => {
  return getInstance('LootSafe').then(async instance => {
    const itemAddress = address || await instance.getItem.call(item)
    const itemInstance = await getInstance('Item', itemAddress)

    const id = await itemInstance.id.call()
    const name = await itemInstance.name.call()
    const skin = await itemInstance.skin.call()
    const metadata = await itemInstance.metadata.call()
    const created = await itemInstance.created.call()
    const owner = await itemInstance.owner.call()
    const symbol = await itemInstance.symbol.call()
    const totalSupply = await itemInstance.totalSupply.call()
    const finalSupply = await itemInstance.finalSupply.call()
    const vault = await itemInstance.vault.call()
    const ownerBalance = await itemInstance.balanceOf.call(owner)

    return {
      address: itemAddress,
      id,
      name,
      skin,
      metadata,
      created,
      owner,
      symbol,
      totalSupply,
      finalSupply,
      vault,
      ownerBalance
    }
  }).catch(e => {
    return {
      status: 404,
      message: "I couldn't find that item! Please check the address."
    }
  })
}

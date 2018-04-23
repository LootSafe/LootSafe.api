const { getInstance } = require('../../modules')

/**
 * Get specific item address
 * @constructor
 * @param {string} address - The item address
 */
module.exports = async (address) => {
  return getInstance('LootSafe').then(async instance => {
    const itemInstance = await getInstance('Item', address)

    const id = await itemInstance.id.call()
    const skin = await itemInstance.skin.call()
    const metadata = await itemInstance.metadata.call()
    const created = await itemInstance.created.call()
    const owner = await itemInstance.owner.call()
    const symbol = await itemInstance.symbol.call()
    const totalSupply = await itemInstance.totalSupply.call()
    const finalSupply = await itemInstance.finalSupply.call()
    const vault = await itemInstance.vault.call()

    return {
      address: address,
      id,
      skin,
      metadata,
      created,
      owner,
      symbol,
      totalSupply,
      finalSupply,
      vault
    }
  })
}

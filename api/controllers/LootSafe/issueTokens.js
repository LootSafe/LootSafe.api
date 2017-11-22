const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Give tokens to address
 * @constructor
 * @param {string} to - Receiving address
 * @param {number} amount - The amount of tokens to give
 */
module.exports = (to = '0x0', amount = 0) => {
  return getInstance('LootSafe').then(instance => {
    instance.issueTokens(
      to,
      amount,
      {gas: 3000000, from: ethereum.account}
    )
  })
}
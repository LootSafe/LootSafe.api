const { getInstance } = require('../../modules')

/**
 * Get the vault balance
 */
module.exports = () => {
  return getInstance('CoreToken').then(async instance => {
    return instance.vault.call()
  })
}

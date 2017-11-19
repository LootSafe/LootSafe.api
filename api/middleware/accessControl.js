const { accessControl } = require('../../config')
const phash = require('password-hash')

module.exports = function access(password) {
  // TODO: Authy verification on each request
  return phash.verify(password, accessControl.key)
}

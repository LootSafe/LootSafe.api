const { accessControl } = require('../../config')
const phash = require('password-hash')

module.exports = function access(password) {
  return phash.verify(password, accessControl.key)
}

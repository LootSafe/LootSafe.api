const { accessControl, yubico } = require('../../config')
const phash = require('password-hash')

const fetch = require('node-fetch')

module.exports = function access (password, otp = 'ccccccglcrcdvbruulujvkegegldbrcjeerdfrfblluh') {
  return new Promise(resolve => {
    if (yubico.enabled) {
      const pass = phash.verify(password, accessControl.key)
      // Random nonce doesn't seem to matter here, since OTP must be different each time anyways
      fetch(`https://api.yubico.com/wsapi/2.0/verify?id=${yubico.clientId}&nonce=3333333333333333&otp=${otp}`)
        .then(res => res.text())
        .then(text => {
          const valid = new RegExp('status=OK').test(text)
          resolve(
            (valid && pass)
          )
        })
    } else {
      resolve(
        phash.verify(password, accessControl.key)
      )
    }
  })
}

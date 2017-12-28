const phash = require('password-hash')
const chalk = require('chalk')
const qrcode = require('qrcode-terminal')

const crypto = require('crypto')
const ethUtils = require('ethereumjs-util')

const getRandomWallet = function () {
  const randbytes = crypto.randomBytes(32)
  const address = '0x' + ethUtils.privateToAddress(randbytes).toString('hex')
  return {
    address: address,
    privKey: randbytes.toString('hex')
  }
}

const pass = getRandomWallet().privKey

const hash = phash.generate(pass)

console.log(
  qrcode.generate(pass, {small: true})
)

console.log(
  chalk.green('Private key generated, save this! You will need this to access any authenticated route!',
    chalk.bold(pass)
  )
)

console.log(
  chalk.blue('Private key hashed, save this to the key field in the config!',
    chalk.bold(hash)
  )
)

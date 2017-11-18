const { accessControl } = require('../../config')
const phash = require('password-hash')
const chalk = require('chalk')


const crypto = require('crypto');
const ethUtils = require('ethereumjs-util')

const getRandomWallet = function() {
    const randbytes = crypto.randomBytes(32);
    const address = '0x' + ethUtils.privateToAddress(randbytes).toString('hex');
    return { address: address, privKey: randbytes.toString('hex') }
}

const pass = getRandomWallet().privKey

const hash = phash.generate(pass)

console.log(
  chalk.green('Private key generated, save this you will need this to access any authenticated route!',
    chalk.bold(pass)
  )
)

console.log(
  chalk.blue('Private key hashed, save this to they key field in the config!',
    chalk.bold(hash)
  )
)
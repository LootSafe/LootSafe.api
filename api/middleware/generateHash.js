const { accessControl } = require('../../config')
const gen = require('generate-password')
const phash = require('password-hash')
const chalk = require('chalk')

const pass = gen.generate({
  length: 30,
  numbers: true
})

const hash = phash.generate(pass)

console.log(
  chalk.green('Password generated, save this you will need this to access any authenticated route!',
    chalk.bold(pass)
  )
)

console.log(
  chalk.blue('Password hashed, save this to they key field in the config!',
    chalk.bold(hash)
  )
)
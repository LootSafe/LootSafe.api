const fetch = require('node-fetch')


/*start: setting up global config files*/
process.argv.forEach(function (val, index, array) {
  if( (val.indexOf('=') > 0) && (val.split('=')[0] === 'env')){
    switch(val.split('=')[1]) {
      case 'local':
        global.config = require('../config.local.js')
      case 'ropsten':
        global.config = require('../config.ropsten.js')
      case 'prod':
        console.log('no prod file specified')
        // TODO: add prod file
    }
  }
  else {
    // default to local, unless environment is specified in the npm run full statement
    global.config = require('../config.local.js')
  }
});

const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider(config.ethereum.provider)
const web3 = new Web3(provider)
// We need to load the web3 account outside of the config json object,
// but make it available throughout the api
global.config.ethereum.account = web3.eth.accounts[0]
/*end: setting up global config*/

/* global describe, it */
describe('Balance', () => {
  describe('Item balance', () => {
    it(`should return 1 item for ${config.ethereum.account}`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            const itemAddress = json.data[0].address
            const account = config.ethereum.account

            fetch(`http://localhost:1337/v1/balance/item/${itemAddress}/${account}`)
              .then(res => res.json())
              .then(json => {
                if (parseInt(json.data) >= 1) {
                  done()
                } else {
                  done(json.message)
                }
              })
          } else {
            done(json.message)
          }
        })
    })
  })

  describe('Item balances', () => {
    it(`should return 1 item for first items in list`, done => {
      const account = config.ethereum.account

      fetch(`http://localhost:1337/v1/balance/items/${account}`)
        .then(res => res.json())
        .then(json => {
          const firstItem = Object.keys(json.data[0])[0]
          if (parseInt(json.data[0][firstItem]) >= 1) {
            done()
          } else {
            done(json.message)
          }
        })
    })
  })

  describe('Token balance', () => {
    it(`should return 0 tokens for ${config.ethereum.account}`, done => {
      fetch(`http://localhost:1337/v1/balance/token/${config.ethereum.account}`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            done()
          } else {
            done(json.message)
          }
        })
    })
  })
})

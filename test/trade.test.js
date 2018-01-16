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
describe('Trade', () => {
  describe('Trade cost', () => {
    it(`should return cost to trade in tokens`, done => {
      fetch(`http://localhost:1337/v1/trade/cost`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200 && !isNaN(parseInt(json.data))) {
            done()
          } else {
            done(json.message)
          }
        })
    })
  })
  describe('Get Trades', () => {
    it(`should return list of trades by merchant`, done => {
      fetch(`http://localhost:1337/v1/trades/get/${config.ethereum.account}`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200 && json.data.length) {
            done()
          } else {
            done(json.message)
          }
        })
    })
  })
  describe('Get Trade', () => {
    it(`should return list of trade by merchant with ID`, done => {
      fetch(`http://localhost:1337/v1/trades/get/${config.ethereum.account}`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/trade/get/${config.ethereum.account}/${json.data[0]}`)
            .then(res => res.json())
            .then(json => {
              if (json.status === 200 && json.data.length) {
                done()
              } else {
                done(json.message)
              }
            })
        })
    })
  })
  describe('Update Trade Cost', () => {
    it(`should return update trade cost`, done => {
      fetch(`http://localhost:1337/v1/trade/cost/45`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
        }
      })
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

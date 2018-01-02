const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

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
      fetch(`http://localhost:1337/v1/trades/get/${ethereum.account}`)
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
      fetch(`http://localhost:1337/v1/trades/get/${ethereum.account}`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/trade/get/${ethereum.account}/${json.data[0]}`)
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

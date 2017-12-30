const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* global describe, it */
describe('Balance', () => {
  describe('Item balance', () => {
    it(`should return 1 item for ${ethereum.account}`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            const itemAddress = json.data[0].address
            const account = ethereum.account

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
      const account = ethereum.account

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
    it(`should return 0 tokens for ${ethereum.account}`, done => {
      fetch(`http://localhost:1337/v1/balance/token/${ethereum.account}`)
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

const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* global describe it */

describe('Balance', () => {
  describe('Item balance', () => {
    it(`Should return item an balance`, done => {
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
              .catch(function (err) {
                done(err)
              })
          } else {
            done('Wrong response code:' + json.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Item balances', () => {
    it(`Should return an item from a list of item balances`, done => {
      const account = ethereum.account

      fetch(`http://localhost:1337/v1/balance/items/${account}`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            const firstItem = Object.keys(json.data[0])[0]

            if (parseInt(json.data[0][firstItem]) >= 1) {
              done()
            } else {
              done(json.message)
            }
          } else {
            done('Wrong response code:' + json.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Token balance', () => {
    it(`Should return token balance for an account`, done => {
      const account = ethereum.account

      fetch(`http://localhost:1337/v1/balance/token/${account}`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            done()
          } else {
            done('Wrong response code:' + json.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })
})

const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* global describe, it */
describe('Crafter', () => {
  describe('Get craftables', () => {
    it(`should return at least one recipie`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
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
  describe('Get Deconstructables', () => {
    it(`should return at least one deconstruction recipie`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
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
  describe('Crafting Recipie', () => {
    it(`should return crafting recipie`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/recipie/get/${json.data[0]}`)
            .then(res => res.json())
            .then(json => {
              if (json.data.length) {
                done()
              } else {
                done(json.message)
              }
            })
        })
    })
  })
  describe('Deconstruction Recipie', () => {
    it(`should return deconstruction recipie`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/recipie/deconstruction/get/${json.data[0]}`)
            .then(res => res.json())
            .then(json => {
              if (json.data.length) {
                done()
              } else {
                done(json.message)
              }
            })
        })
    })
  })
  describe('New Crafting Recipie', () => {
    it(`should create crafting recipie`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
        .then(res => res.json())
        .then(json => {
          const itemToCraft = json.data[0].address
          const itemRequired = [
            json.data[1].address
          ]
          const quantites = [
            1
          ]
          fetch(`http://localhost:1337/v1/recipie/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
            },
            body: JSON.stringify({
              result: itemToCraft,
              materials: itemRequired,
              counts: quantites
            })
          })
          .then(res => res.json())
          .then(json => {
            if (json.status === 200 && json.data.tx) {
              done()
            } else {
              done(json.message)
            }
          })
        })
    })
  })
  describe('New Deconstruction Recipie', () => {
    it(`should create deconstruction recipie`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
        .then(res => res.json())
        .then(json => {
          const itemToCraft = json.data[0].address
          const itemRequired = [
            json.data[1].address
          ]
          const quantites = [
            1
          ]
          fetch(`http://localhost:1337/v1/recipie/deconstruction/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
            },
            body: JSON.stringify({
              result: itemToCraft,
              materials: itemRequired,
              counts: quantites
            })
          })
          .then(res => res.json())
          .then(json => {
            if (json.status === 200 && json.data.tx) {
              done()
            } else {
              done(json.message)
            }
          })
        })
    })
  })
  describe('Remove Crafting Recipie', () => {
    it(`should remove crafting recipie`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
      .then(res => res.json())
      .then(json => {
        const itemToCraft = json.data[0].address

        fetch(`http://localhost:1337/v1/recipie/remove`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
          },
          body: JSON.stringify({
            item: itemToCraft
          })
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
  describe('Remove Deconstruction Recipie', () => {
    it(`should remove deconstruction recipie`, done => {
      done()
    })
  })
})

const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* global describe, it */
describe('Crafter', () => {
  describe('Get craftables', () => {
    it(`should return at least one recipe`, done => {
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
    it(`should return at least one deconstruction recipe`, done => {
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
  describe('Crafting Recipe', () => {
    it(`should return crafting recipe`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/recipe/get/${json.data[0]}`)
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
  describe('Deconstruction Recipe', () => {
    it(`should return deconstruction recipe`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/recipe/deconstruction/get/${json.data[0]}`)
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
  describe('New Crafting Recipe', () => {
    it(`should create crafting recipe`, done => {
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
          fetch(`http://localhost:1337/v1/recipe/new`, {
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
  describe('New Deconstruction Recipe', () => {
    it(`should create deconstruction recipe`, done => {
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
          fetch(`http://localhost:1337/v1/recipe/deconstruction/new`, {
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
  describe('Remove Crafting Recipe', () => {
    it(`should remove crafting recipe`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
      .then(res => res.json())
      .then(json => {
        const itemToCraft = json.data[0].address

        fetch(`http://localhost:1337/v1/recipe/remove`, {
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
  describe('Remove Deconstruction Recipe', () => {
    it(`should remove deconstruction recipe`, done => {
      done()
    })
  })
})

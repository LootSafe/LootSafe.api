const fetch = require('node-fetch')

/* global describe, it */
describe('LootBox', () => {
  describe('Add Item to LootBox', () => {
    it(`should add item to lootbox`, done => {
      fetch('http://localhost:1337/v1/item/ledger')
        .then(res => res.json())
        .then(json => {
          const item = json.data[0].address
          fetch(`http://localhost:1337/v1/lootbox/item/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
            },
            body: JSON.stringify({
              item,
              rarity: 'common'
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
  describe('Get lootbox chances', () => {
    it(`should retreive lootbox chances`, done => {
      fetch('http://localhost:1337/v1/lootbox/chances')
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
  describe('Get lootbox cost', () => {
    it(`should retreive lootbox cost`, done => {
      fetch('http://localhost:1337/v1/lootbox/cost')
        .then(res => res.json())
        .then(json => {
          if (json.status === 200 && json.data) {
            done()
          } else {
            done(json.message)
          }
        })
    })
  })
  describe('Get lootbox items', () => {
    it(`should retreive lootbox items for rarity`, done => {
      fetch('http://localhost:1337/v1/lootbox/items/common')
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
  describe('Update lootbox cost', () => {
    it(`should update lootbox open cost`, done => {
      fetch(`http://localhost:1337/v1/lootbox/cost/343`, {
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
  describe('Update lootbox chances', () => {
    it(`should update lootbox rarity chances`, done => {
      fetch(`http://localhost:1337/v1/lootbox/chances/update/3/4/3`, {
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
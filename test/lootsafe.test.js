const fetch = require('node-fetch')

/* global describe, it */
describe('Item', () => {
  describe('Get Items', () => {
    it(`should return a list of items`, done => {
      fetch(`http://localhost:1337/v1/item/list`)
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
  describe('Get Item', () => {
    it(`should return a single item`, done => {
      fetch(`http://localhost:1337/v1/item/list`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/item/get/${json.data[0]}`)
            .then(res => res.json())
            .then(json => {
              if (json.status === 200 && json.data.address) {
                done()
              } else {
                done(json.message)
              }
            })
        })
    })
  })
  describe('Get Item Addresses', () => {
    it(`should return a list of item addresses`, done => {
      fetch(`http://localhost:1337/v1/item/addresses/get`)
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
  describe('Get Item By Address', () => {
    it(`should an item by address`, done => {
      fetch(`http://localhost:1337/v1/item/addresses/get`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/item/get/address/${json.data.items[0]}`)
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
  describe('Get Token Address', () => {
    it(`should show token address`, done => {
      fetch(`http://localhost:1337/v1/address/token`)
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

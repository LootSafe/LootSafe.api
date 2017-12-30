const fetch = require('node-fetch')

/* global describe, it */
describe('Token', () => {
  describe('Token balance', () => {
    it(`should return number for vault balance`, done => {
      fetch(`http://localhost:1337/v1/token/vault/balance`)
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
})

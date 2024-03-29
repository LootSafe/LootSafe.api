const fetch = require('node-fetch')

/* global describe it */

describe('Events', () => {
  describe('Get Events', () => {
    it(`Should return all events`, done => {
      fetch(`http://localhost:1337/v1/events`)
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

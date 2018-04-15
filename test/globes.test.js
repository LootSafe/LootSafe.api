const fetch = require('node-fetch')

/* global describe it */

describe('Globes', () => {
  describe('meta', () => {
    it(`Should return metadata`, done => {
      fetch(`http://localhost:1337/v1/`)
        .then(res => res.json())
        .then(json => {
          if (json.connected === true) {
            done()
          } else {
            done('Not connected ' + json)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Token Address', () => {
    it(`Should show token address`, done => {
      fetch(`http://localhost:1337/v1/address/token`)
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

  describe('Create New Item', () => {
    var timestr = new Date()
    it(`Should show token address`, done => {
      fetch(`http://localhost:1337/v1/item/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
        },
        body: JSON.stringify({
          name: 'potato',
          id: timestr,
          totalSupply: 100,
          skin: 'potatoskins',
          metadata: 'metadata',
          symbol: 'TAYTR'
        })
      })
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

const fetch = require('node-fetch')

/* global describe it */

describe('Crafter', () => {
  describe('Get Craftables', () => {
    it(`Should return a list of craftable recipes`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
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

  describe('Get Deconstructables', () => {
    it(`Should return a list of desconstructable recipes`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
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

  describe('Get Recipe', () => {
    it(`Should return a recipe`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            const itemAddress = json.data[0]

            fetch(`http://localhost:1337/v1/recipe/get/${itemAddress}`)
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

  describe('Get Deconstructable Recipe', () => {
    it(`Should return a deconstructable recipe`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200) {
            const itemAddress = json.data[0]

            fetch(`http://localhost:1337/v1/recipe/deconstruction/get/${itemAddress}`)
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

  describe('Remove Crafting Recipe', () => {
    it(`Should remove a crafting recipe`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
      .then(res => res.json())
      .then(json => {
        const itemToRemove = json.data[0].address

        fetch(`http://localhost:1337/v1/recipe/remove`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
          },
          body: JSON.stringify({
            item: itemToRemove
          })
        })
        .then(res => res.json())
        .then(json => {
          if (json.status === 200 && json.data.tx) {
            done()
          } else {
            done('Wrong response code:' + json.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
      })
      .catch(function (err) {
        done(err)
      })
    })
  })

  describe('New Crafting Recipe', () => {
    it(`Should create crafting recipe`, done => {
      fetch(`http://localhost:1337/v1/item/ledger`)
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
              done('Wrong response code:' + json.status)
            }
          })
          .catch(function (err) {
            done(err)
          })
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('New Deconstruction Recipe', () => {
    it(`Should create deconstruction recipe`, done => {
      fetch(`http://localhost:1337/v1/item/ledger`)
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
              done('Wrong response code:' + json.status)
            }
          })
          .catch(function (err) {
            done(err)
          })
        })
        .catch(function (err) {
          done(err)
        })
    })
  })
})

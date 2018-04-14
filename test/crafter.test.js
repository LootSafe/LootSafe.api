const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* Tests */

describe('Crafter', () => {

  describe('Get Craftables', () => {
    it(`should return at least one recipe`, done => {
      fetch(`http://localhost:1337/v1/craftables`)
        .then(res => res.json())
        .then(json => {
          if(json.status === 200)
            done()
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })
    })
  })

  describe('Get Deconstructables', () => {
    it(`should return at least one deconstruction recipe`, done => {
      fetch(`http://localhost:1337/v1/deconstructables`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 200)
            done()
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })        
    })
  })

  describe('Get Recipe', () => {
    
    it(`should return 1 recipe`, done => {

      fetch(`http://localhost:1337/v1/craftables`)
        .then(res => res.json())
        .then(json => {

          if(json.status === 200){

            const itemAddress = json.data[0]

            fetch(`http://localhost:1337/v1/recipe/get/${itemAddress}`)
              .then(res => res.json())
              .then(json => {
                if (parseInt(json.data) >= 1)
                  done()
                else
                  done(json.message)
              })
              .catch(function(err){
                done(err)
              })
          }
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })
    })
  })

  describe('Get Deconstructable Recipe', () => {
    
    it(`should return 1 destruction recipe`, done => {

      fetch(`http://localhost:1337/v1/deconstructables`)
        .then(res => res.json())
        .then(json => {

          if(json.status === 200){

            const itemAddress = json.data[0]

            fetch(`http://localhost:1337/v1/recipe/deconstruction/get/${itemAddress}`)
              .then(res => res.json())
              .then(json => {
                if (parseInt(json.data) >= 1)
                  done()
                else
                  done(json.message)
              })
              .catch(function(err){
                done(err)
              })
          }
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })
    })
  })

  describe('Remove Crafting Recipe', () => {
    it(`should remove 1 crafting recipe`, done => {
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
          if(json.status === 200 && json.data.tx)
            done()
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })
      })
      .catch(function(err){
        done(err)
      })  
    })
  })  

  describe('New Crafting Recipe', () => {
    it(`should create crafting recipe`, done => {
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
            if(json.status === 200 && json.data.tx)
              done()
            else
              done('Wrong response code:'  + json.status)
          })
          .catch(function(err){
            done(err)
          })          
        })
        .catch(function(err){
          done(err)
        })       
    })
  })

  describe('New Deconstruction Recipe', () => {
    it(`should create deconstruction recipe`, done => {
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
            if(json.status === 200 && json.data.tx)
              done()
            else
              done('Wrong response code:'  + json.status)
          })
          .catch(function(err){
            done(err)
          })   
        })
        .catch(function(err){
          done(err)
        })           
    })
  })
})
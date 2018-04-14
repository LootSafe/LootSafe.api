const fetch = require('node-fetch')

const {
  ethereum
} = require('../config')

/* Tests */

describe('Item', () => {

  describe('Get Ledger', () => {
    it(`should return a list of items`, done => {
      fetch(`http://localhost:1337/v1/item/ledger`)
        .then(res => res.json())
        .then(json => {
          if(json.status === 200 && json.data.length)
            done()
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })        
    })
  })

  describe('Get Items', () => {
    it(`should return a list of items`, done => {
      fetch(`http://localhost:1337/v1/item/list`)
        .then(res => res.json())
        .then(json => {
          if(json.status === 200 && json.data.length)
            done()
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })        
    })
  })

  describe('Get Item', () => {
    it(`should return a single item`, done => {
      fetch(`http://localhost:1337/v1/item/addresses/get`)
        .then(res => res.json())
        .then(json => {

          fetch(`http://localhost:1337/v1/item/get/${json.data.items[0]}`)
            .then(res => res.json())
            .then(json => {
              if(json.status === 200 && json.data.address)
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

  describe('Get Item Addresses', () => {
    it(`should return a list of item addresses`, done => {
      fetch(`http://localhost:1337/v1/item/addresses/get`)
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

  describe('Get Item By Address', () => {
    it(`should an item by address`, done => {
      fetch(`http://localhost:1337/v1/item/addresses/get`)
        .then(res => res.json())
        .then(json => {
          fetch(`http://localhost:1337/v1/item/get/address/${json.data.items[0]}`)
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
        .catch(function(err){
          done(err)
        })                
    })
  })

  describe('Get Token Address', () => {
    it(`should show token address`, done => {
      fetch(`http://localhost:1337/v1/address/token`)
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

  describe('Create New Item', () => {

    var timestr = new Date()

    it(`should show token address`, done => {
        fetch(`http://localhost:1337/v1/item/new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
          },
          body: JSON.stringify({
            name : 'potato',
            id : timestr,
            totalSupply : 100,
            skin : 'potatoskins',
            metadata : 'metadata',
            symbol : 'TAYTR'
          })
        })
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

  describe('Spawn Item', () => {

    var timestr = new Date()

    it(`should spawn an item`, done => {

      var account = ethereum.account

      fetch(`http://localhost:1337/v1/address/token`)
        .then(res => res.json())
        .then(json => {
          if(json.status === 200)
          {
            fetch(`http://localhost:1337/v1/item/spawn`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
              },
              body: JSON.stringify({
                itemAddress  : json.address,
                to : account
              })
            })
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
          }
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })   
    })

  })

  describe('Clear Availability', () => {

    var timestr = new Date()

    it(`should clear availability`, done => {

      var account = ethereum.account

      fetch(`http://localhost:1337/v1/address/token`)
        .then(res => res.json())
        .then(json => {

          if(json.status === 200)
          {
            fetch(`http://localhost:1337/v1/item/clearAvailability`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
              },
              body: JSON.stringify({
                itemAddress  : json.address,
                to : account
              })
            })
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
          }
          else
            done('Wrong response code:'  + json.status)
        })
        .catch(function(err){
          done(err)
        })   
    })

  })

})
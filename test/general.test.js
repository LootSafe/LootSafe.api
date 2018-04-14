const fetch = require('node-fetch')

/* Tests */

describe('General', () => {

  describe('meta', () => {
    it(`should return metadata`, done => {
      fetch(`http://localhost:1337/v1/`)
        .then(res => res.json())
        .then(json => {
          if(json.connected === true)
            done()
          else
            done('Not connected ' + json)
        })
        .catch(function(err){
          done(err)
        })        
    })
  })

})
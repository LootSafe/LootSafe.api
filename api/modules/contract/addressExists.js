const Web3 = require('web3')
const web3 = new Web3()
const getInstance = require('./getInstance')

module.exports = address => {
  return new Promise(resolve => {
    // First we make sure it's a real address
    if (web3.isAddress(address)) {
      // Now we make sure the address is a real item in our system
      getInstance('LootSafe').then(instance => {
        instance.getItemAddresses.call().then(addresses => {
          resolve(addresses.includes(address))
        })
      })
    } else {
      resolve(false)
    }
  })
}
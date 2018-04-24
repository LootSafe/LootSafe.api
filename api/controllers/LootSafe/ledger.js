const { simpleCall } = require('../../modules')
const getItem = require('./getItem')
const Web3 = require('web3')
const web3 = new Web3()

const { getItems } = require('../../modules')

/**
 * Get the available items
 * @route
 */
module.exports = () => {
  return getItems()
}

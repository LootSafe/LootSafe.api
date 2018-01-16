const Web3 = require('web3')
const contract = require('truffle-contract')

const provider = new Web3.providers.HttpProvider(config.ethereum.provider)
const web3 = new Web3(provider)

const contracts = (config.ethereum.testnet) ? require('../../../contracts/contracts.json') : config.addresses

const statefulCall = function (contractName, address = false) {
  const artifacts = require(`../../../contracts/build/contracts/${contractName}.json`)
  const abi = contract(artifacts)
  abi.setProvider(web3.currentProvider)
  return abi.at(address || contracts[contractName]).then(instance => {
    return instance
  })
}

module.exports = statefulCall

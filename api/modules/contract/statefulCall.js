const Web3 = require('web3')
const contract = require('truffle-contract')

const {
  ethereum,
  addresses
} = require('../../../config')

const provider = new Web3.providers.HttpProvider(ethereum.provider)
const web3 = new Web3(provider)

const contracts = (ethereum.testnet) ? require('../../../contracts/contracts.json') : addresses

const statefulCall = function (contractName) {
  const artifacts = require(`../../../contracts/build/contracts/${contractName}.json`)
  const abi = contract(artifacts)
  abi.setProvider(web3.currentProvider)
  console.log(contractName, contracts[contractName])
  return abi.at(contracts[contractName]).then(instance => {
    console.log('instance address', instance.address)
    return instance
  })
}

module.exports = statefulCall

const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
  address: {
    type: String,
    default: '0x0'
  },
  name: {
    type: String,
    default: '0x0'
  },
  ownerBalance: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    default: '0x0'
  },
  skin: {
    type: String,
    default: '0x0'
  },
  metadata: {
    type: String,
    default: 'no_metadata'
  },
  created: {
    type: Number,
    default: Date.now()
  },
  owner: {
    type: String,
    default: '0x0'
  },
  symbol: {
    type: String,
    default: '0x0'
  },
  totalSupply: {
    type: Number,
    default: 0
  },
  finalSupply: {
    type: Number,
    default: 0
  },
  vault: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Item', ItemSchema)

const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
  logIndex: {
    type: Number,
    default: 0
  },
  transactionIndex: {
    type: Number,
    number: 0
  },
  transactionHash: {
    type: String,
    defualt: '0x0'
  },
  blockHash: {
    type: String,
    default: '0x0'
  },
  blockNumber: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    default: '0x0'
  },
  event: {
    type: String,
    default: 'Unknown'
  },
  args: {
    type: Object,
    default: {}
  }
})

module.exports = mongoose.model('Event', EventSchema)

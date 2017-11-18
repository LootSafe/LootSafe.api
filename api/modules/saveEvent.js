const { EventSchema } = require('../schemas')

module.exports = (event) => {
  EventSchema.findOne({ transactionHash: event.transactionHash }, (err, e) => {
    if (!e) {
      const newEvent = new EventSchema({
        logIndex: event.logIndex,
        transactionHash: event.transactionHash,
        blockHash: event.blockHash,
        blockNumber: event.blockNumber,
        address: event.address,
        type: event.type,
        event: event.event,
        args: event.args
      })

      newEvent.save()
    }
  })
}
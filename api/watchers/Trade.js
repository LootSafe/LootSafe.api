const { getInstance, saveEvent } = require('../modules')

getInstance('LootSafe').then(instance => {
  instance.TradeEvent().watch((err, event) => {
    if (err) throw new Error('Error watching trade creation', err)
    saveEvent(event)
  })
})
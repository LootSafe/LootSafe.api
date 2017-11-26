const { getInstance, saveEvent } = require('../modules')

getInstance('LootSafe').then(instance => {
  instance.LootBoxOpened().watch((err, event) => {
    if (err) throw new Error('Error watching loot box opening', err)
    saveEvent(event)
  })

  instance.CostUpdated().watch((err, event) => {
    if (err) throw new Error('Error watching cost updating', err)
    saveEvent(event)    
  })

  instance.LootBoxItemAdded().watch((err, event) => {
    if (err) throw new Error('Error watching item adding', err)
    saveEvent(event)    
  })
})
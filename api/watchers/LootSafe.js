const { getInstance, saveEvent } = require('../modules')

getInstance('LootSafe').then(instance => {
  instance.ItemCreated().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })

  instance.ItemDelisted().watch((err, event) => {
    if (err) throw new Error('Error watching item delisting', err)
    saveEvent(event)    
  })

  instance.ItemSpawned().watch((err, event) => {
    if (err) throw new Error('Error watching item spawning', err)
    saveEvent(event)    
  })

  instance.ItemDespawned().watch((err, event) => {
    if (err) throw new Error('Error watching item despawning', err)
    saveEvent(event)    
  })

  instance.TokenIssued().watch((err, event) => {
    if (err) throw new Error('Error watching token issued', err)
    saveEvent(event)    
  })
})
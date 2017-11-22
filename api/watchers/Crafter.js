const { getInstance, saveEvent } = require('../modules')

getInstance('LootSafe').then(instance => {
  instance.ItemCrafted().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })

  instance.ItemDeconstructed().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })
})
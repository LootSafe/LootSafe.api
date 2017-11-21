const { getInstance, saveEvent } = require('../modules')

getInstance('BlockBench').then(instance => {
  instance.RecipieCreated().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })

  instance.DeconstructionRecipieCreated().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })

  instance.ItemCrafted().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })

  instance.ItemDeconstructed().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    saveEvent(event)
  })
})
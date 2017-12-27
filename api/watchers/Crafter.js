const { getInstance, saveEvent } = require('../modules')
const chalk = require('chalk')

getInstance('LootSafe').then(instance => {
  instance.ItemCrafted().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemCrafted ')),
      chalk.cyan(event.args)
    )
    saveEvent(event)
  })

  instance.ItemDeconstructed().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemDeconstructed ')),
      chalk.cyan(event.args)
    )
    saveEvent(event)
  })
})
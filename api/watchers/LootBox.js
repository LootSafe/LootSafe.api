const { getInstance, saveEvent } = require('../modules')
const chalk = require('chalk')

getInstance('LootSafe').then(instance => {
  instance.LootBoxOpened().watch((err, event) => {
    if (err) throw new Error('Error watching loot box opening', err)
    console.log(
      chalk.bgCyan(chalk.black(' LootBoxOpened ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)
  })

  instance.CostUpdated().watch((err, event) => {
    if (err) throw new Error('Error watching cost updating', err)
    console.log(
      chalk.bgCyan(chalk.black(' CostUpdated ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })

  instance.LootBoxItemAdded().watch((err, event) => {
    if (err) throw new Error('Error watching item adding', err)
    console.log(
      chalk.bgCyan(chalk.black(' LootBoxItemAdded ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })
})
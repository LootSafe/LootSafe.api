const { getInstance, saveEvent } = require('../modules')
const chalk = require('chalk')

getInstance('LootSafe').then(instance => {
  instance.ItemCreated().watch((err, event) => {
    if (err) throw new Error('Error watching item creation', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemCreated ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)
  })

  instance.ItemDelisted().watch((err, event) => {
    if (err) throw new Error('Error watching item delisting', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemDelisted ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })

  instance.ItemSpawned().watch((err, event) => {
    if (err) throw new Error('Error watching item spawning', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemSpawned ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })

  instance.ItemDespawned().watch((err, event) => {
    if (err) throw new Error('Error watching item despawning', err)
    console.log(
      chalk.bgCyan(chalk.black(' ItemDespawned ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })

  instance.TokenIssued().watch((err, event) => {
    if (err) throw new Error('Error watching token issued', err)
    console.log(
      chalk.bgCyan(chalk.black(' TokenIssued ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)    
  })
})
const { getInstance, saveEvent } = require('../modules')
const chalk = require('chalk')

getInstance('LootSafe').then(instance => {
  instance.TradeEvent().watch((err, event) => {
    if (err) throw new Error('Error watching trade creation', err)
    console.log(
      chalk.bgCyan(chalk.black(' TradeEvent ')),
      chalk.cyan(JSON.stringify(event.args))
    )
    saveEvent(event)
  })
})
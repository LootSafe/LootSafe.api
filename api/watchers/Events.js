const { getInstance, saveEvent } = require('../modules')
const chalk = require('chalk')

const events = [
  'ItemCrafted',
  'ItemDeconstructed',
  'LootBoxOpened',
  'CostUpdated',
  'LootBoxItemAdded',
  'ItemCreated',
  'ItemDelisted',
  'ItemSpawned',
  'ItemDespawned',
  'TokenIssued',
  'TradeEvent'
]

getInstance('LootSafe').then(instance => {
  events.map(eventName => {
    instance[eventName]().watch((err, event) => {
      if (err) throw new Error('Error watching item creation', err)
      console.log(
        chalk.bgCyan(chalk.black(` ${eventName} `)),
        chalk.cyan(JSON.stringify(event.args))
      )
      saveEvent(event)
    })
  })
})

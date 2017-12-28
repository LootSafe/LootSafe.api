const { ledger } = require('../controllers')
const { Item } = require('../schemas')
const chalk = require('chalk')

// Cache all itemas to DB
const cacheItems = () => {
  console.log(
    chalk.bgYellow(
      chalk.black(
        'Starting item ledger cache process.'
      )
    )
  )

  ledger().then(items => {
    items.map(item => {
      Item.findOne({ address: item.address }).then(item => {
        if (item) {
          const itemData = {
            address: item.address,
            id: item.id,
            skin: item.skin,
            metadata: item.metadata,
            created: parseInt(item.created),
            owner: item.owner,
            symbol: item.symbol,
            totalSupply: parseInt(item.totalSupply),
            finalSupply: parseInt(item.finalSupply),
            vault: parseInt(item.vault)
          }

          item = itemData
          item.save((err) => {
            console.log(chalk.yellow('Saved item', item.address))
          })
        } else {
          console.log('new item')
          const itemData = new Item({
            address: item.address,
            id: item.id,
            skin: item.skin,
            metadata: item.metadata,
            created: parseInt(item.created),
            owner: item.owner,
            symbol: item.symbol,
            totalSupply: parseInt(item.totalSupply),
            finalSupply: parseInt(item.finalSupply),
            vault: parseInt(item.vault)
          })

          console.log('itemData', itemData)

          itemData.save(err => {
            if (err) {
              console.log('Error saving item', err)
            }
            console.log(chalk.yellow('Saved item', item.address))
          })
        }
      })
    })
  })
}

module.exports = cacheItems

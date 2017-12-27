const { getInstance } = require('../../api/modules')
const chalk = require('chalk')

const itemAddresses = {}

const items = [
  {
    name: 'AK-47',
    id: 'ak47',
    supply: 120000,
    rarity: 'rare'
  },
  {
    name: 'UMP-45',
    id: 'ump45',
    supply: 120000,
    rarity: 'uncommon'
  },
  {
    name: 'AUG',
    id: 'aug',
    supply: 120000,
    rarity: 'uncommon'
  },
  {
    name: 'Revolver',
    id: 'revolver',
    supply: 120000,
    rarity: 'uncommon'
  },
  {
    name: 'M14A1',
    id: 'm14a1',
    supply: 120000,
    rarity: 'common'
  },
  {
    name: 'MP5-K',
    id: 'mp5k',
    supply: 120000,
    rarity: 'epic'
  }
]

const {
  ethereum,
  addresses
} = require('../../config')


console.log(
  chalk.green('Adding items')
)
getInstance('LootSafe').then(instance => {
  items.map(item => {
    instance.createItem(
      item.name,
      item.id,
      item.supply,
      '',
      '',
      {gas: 3000000, from: ethereum.account}
    ).then(tx => {
      itemAddresses[item.id] = tx.logs[0].args.itemAddress
      console.log(
        `${chalk.green(item.name + ' created at address')} ${chalk.grey(tx.logs[0].args.itemAddress)}`
      )
    })
  })
})

setTimeout(() => {
  console.log(
    chalk.green('Adding items to lootbox')
  )
  getInstance('LootSafe').then(instance => {
    items.map(item => {
      instance.addItem(
        itemAddresses[item.id],
        item.rarity,
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        console.log(
          `${chalk.green(item.name + ' added to lootbox ')} ${chalk.blue(item.rarity)}`
        )
      })
    })
  })

  getInstance('LootSafe').then(instance => {
    items.map(item => {
      instance.spawnItem(
        itemAddresses[item.id],
        ethereum.account,
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        console.log(
          `${chalk.green(item.name + ' given to')} ${chalk.blue(ethereum.account)}`
        )
      })
    })
  })

  setTimeout(() => {
    getInstance('LootSafe').then(instance => {
      instance.newTrade(
        itemAddresses['ak47'],
        itemAddresses['ump45'],
        1,
        2,
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        console.log(
          `${chalk.green('Trade created')} ${chalk.blue(ethereum.account)}`
        )
      })
    })
  }, 5000)
}, 5000)
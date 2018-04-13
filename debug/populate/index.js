const { getInstance } = require('../../api/modules')
const chalk = require('chalk')

const itemAddresses = {}

const items = [
  {
    name: 'Power G',
    id: 'powerg',
    symbol: 'PWRG',
    supply: 150,
    rarity: 'rare',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/powerGlove.png'})
  },
  {
    name: 'LootCoin',
    id: 'lootcoin',
    symbol: 'LOOT',
    supply: 120000,
    rarity: 'common',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/coin.png'})
  },
  {
    name: 'Pouch',
    id: 'pouch',
    symbol: 'HODL',
    supply: 15000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/pouch.png'})
  },
  {
    name: 'Potion',
    id: 'potion',
    symbol: 'HEAL',
    supply: 25000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/potion.png'})

  },
  {
    name: 'Potato',
    id: 'potato',
    symbol: 'TATR',
    supply: 120000,
    rarity: 'rare',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/tater.png'})

  },
  {
    name: 'Arrow',
    id: 'arrow',
    symbol: 'ARRW',
    supply: 120000,
    rarity: 'common',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/arrow.png'})

  },
  {
    name: 'Bow',
    id: 'bow',
    symbol: 'BOW',
    supply: 120000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/bow.png'})

  },
  {
    name: 'Backpack',
    id: 'backpack',
    symbol: 'BPAK',
    supply: 120000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/backpack.png'})

  },
  {
    name: 'Dagger',
    id: 'dagger',
    symbol: 'DAGR',
    supply: 120000,
    rarity: 'common',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/dagger.png'})

  }
]

const {
  ethereum
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
      item.meta,
      item.symbol,
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
      instance.newRecipe(
        itemAddresses['powerg'],
        [
          itemAddresses['lootcoin']
        ],
        [
          2
        ],
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        console.log(
          `${chalk.green('Power Glove crafting recipe created')}`
        )
      })
    })
  }, 5000)

  setTimeout(() => {
    getInstance('LootSafe').then(instance => {
      instance.newDeconstructionRecipe(
        itemAddresses['powerg'],
        [
          itemAddresses['lootcoin']
        ],
        [
          2
        ],
        {gas: 3000000, from: ethereum.account}
      ).then(tx => {
        console.log(
          `${chalk.green('Power Glove deconstruction recipe created')}`
        )
      })
    })
  }, 5000)
}, 5000)

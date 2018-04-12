const { getInstance } = require('../../api/modules')
const chalk = require('chalk')

const itemAddresses = {}

const items = [
  {
    name: 'Power G',
    id: 'powerg',
    supply: 150,
    rarity: 'rare',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/powerGlove.png'})
  },
  {
    name: 'LootCoin',
    id: 'lootcoin',
    supply: 120000,
    rarity: 'common',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/coin.png'})
  },
  {
    name: 'Pouch',
    id: 'pouch',
    supply: 15000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/pouch.png'})
  },
  {
    name: 'Potion',
    id: 'potion',
    supply: 25000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'http://lootsafe-cachestash.9egbdneg7uzvgp.maxcdn-edge.com/potion.png'})

  },
  {
    name: 'Ext Mag',
    id: 'extmag',
    supply: 120000,
    rarity: 'rare',
    meta: JSON.stringify({'img': 'https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/e/e6/Icon_attach_Magazine_Extended_Large.png'})

  },
  {
    name: 'UMP-45',
    id: 'ump45',
    supply: 120000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/f/fb/Icon_weapon_UMP.png'})

  },
  {
    name: 'AUG',
    id: 'aug',
    supply: 120000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/e/ea/Icon_weapon_AUG_A3.png?version=265b35929df10c6ec906c04ceefb7e98'})

  },
  {
    name: 'Revolver',
    id: 'revolver',
    supply: 120000,
    rarity: 'uncommon',
    meta: JSON.stringify({'img': 'https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/0/02/Icon_weapon_R45.png?version=f1da5a4f74f9c31064bc642579fd9f2b'})

  },
  {
    name: 'M14A1',
    id: 'm14a1',
    supply: 120000,
    rarity: 'common',
    meta: JSON.stringify({'img': 'https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/9/99/Icon_weapon_HK416.png?version=4496e28b47e3e4f97a5c343f4ca5b3e2'})

  },
  {
    name: 'MP5-K',
    id: 'mp5k',
    supply: 120000,
    rarity: 'epic',
    meta: JSON.stringify({'img': 'https://vignette.wikia.nocookie.net/farcry/images/3/32/FC3_cutout_smg_mp5.png/revision/latest?cb=20130907102712'})
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
      'LSIC',
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

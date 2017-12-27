const chalk = require('chalk')
const ngrok = require('ngrok')
const package = require('../package.json')
const _ = require('koa-route')
const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const cors = require('koa-cors')

const cacheItems = require('./subroutines/cacheItems')

const {
  port,
  version,
  debug,
  db,
  cacheInterval,
  prefix
} = require('../config')

const {
  // Core
  meta,
  getTokenAddress,
  newItem,
  getItems,
  getItem,
  spawnItem,
  clearAvailability,
  getItemAddresses,
  getItemByAddress,
  ledger,
  // Crafter
  getRecipie,
  getDeconstructionRecipie,
  newRecipie,
  newDeconstructionRecipie,
  getCraftables,
  getDeconstructables,
  removeRecipie,
  // LootBox
  addItem,
  getChances,
  getLootBoxItems,
  updateChance,
  updateLootBoxCost,
  // Token
  balanceOf,
  getVaultBalance,
  // Trade
  getTrade,
  getTrades,
  getTradeCost,
  updateTradeCost,
  // Events
  fetchEvents
} = require('./routes')

mongoose.connect(`mongodb://localhost/${db}`)

/* TODO
cacheItems()
setInterval(cacheItems, cacheInterval)
*/

app.use(cors())
app.use(bodyParser())
app.use(logger())

// General
app.use(_.get(`${prefix}/v${version}/`, meta))

app.use(_.get(`${prefix}/v${version}/address/token`, getTokenAddress))
app.use(_.get(`${prefix}/v${version}/item/list`, getItems))
app.use(_.get(`${prefix}/v${version}/item/get/:item`, getItem))
app.use(_.get(`${prefix}/v${version}/item/get/address/:address`, getItemByAddress))
app.use(_.get(`${prefix}/v${version}/item/addresses/get`, getItemAddresses))
app.use(_.get(`${prefix}/v${version}/item/ledger`, ledger))

app.use(_.get(`${prefix}/v${version}/craftables`, getCraftables))
app.use(_.get(`${prefix}/v${version}/deconstructables`, getDeconstructables))

app.use(_.get(`${prefix}/v${version}/lootbox/chances`, getChances))
app.use(_.get(`${prefix}/v${version}/lootbox/items/:rarity`, getLootBoxItems))

app.use(_.get(`${prefix}/v${version}/recipie/get/:item`, getRecipie))
app.use(_.get(`${prefix}/v${version}/recipie/deconstruction/get/:item`, getDeconstructionRecipie))

app.use(_.get(`${prefix}/v${version}/token/balance/:address`, balanceOf))
app.use(_.get(`${prefix}/v${version}/token/vault/balance`, getVaultBalance))

app.use(_.get(`${prefix}/v${version}/trade/get/:merchant/:tradeid`, getTrade))
app.use(_.get(`${prefix}/v${version}/trades/get/:merchant`, getTrades))
app.use(_.get(`${prefix}/v${version}/trade/cost`, getTradeCost))

// Admin routes
// Core
app.use(_.post(`${prefix}/v${version}/item/new`, newItem))
app.use(_.post(`${prefix}/v${version}/item/spawn`, spawnItem))
app.use(_.post(`${prefix}/v${version}/item/clearAvailability`, clearAvailability))

// Crafter
app.use(_.post(`${prefix}/v${version}/recipie/new`, newRecipie))
app.use(_.post(`${prefix}/v${version}/recipie/remove`, removeRecipie))
app.use(_.post(`${prefix}/v${version}/recipie/deconstruction/new`, newDeconstructionRecipie))


// LootBox
app.use(_.post(`${prefix}/v${version}/lootbox/item/add`, addItem))
app.use(_.get(`${prefix}/v${version}/lootbox/chances/update/:epic/:rare/:uncommon`, updateChance))
app.use(_.get(`${prefix}/v${version}/lootbox/cost/:cost`, updateLootBoxCost))

// Trade
app.use(_.get(`${prefix}/v${version}/trade/cost/:cost`, updateTradeCost))

// Events
app.use(_.get(`${prefix}/v${version}/events`, fetchEvents))


app.listen(port)

// 🚀 We have liftoff
console.log(
  chalk.bold(
    chalk.green(
      `${package.name} ${prefix}/v${version} listening on port ${port}`.toUpperCase(),
      chalk.blue(`http://localhost:${port}/${prefix}/v${version}/`)
    )
  )
)


if (debug) ngrok.connect(9090, (err, url) => {
  console.log(
    chalk.bold(
      chalk.gray(
        `Debug Enabled, ngrok available at`.toUpperCase(),
        url
      )
    )
  )
}) 

require('./watchers')

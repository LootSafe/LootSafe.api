const chalk = require('chalk')
const ngrok = require('ngrok')
const package = require('../package.json')
const _ = require('koa-route')
const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const {
  port,
  version,
  debug,
  db
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
  updateTradeCost
} = require('./routes')

mongoose.connect(`mongodb://localhost/${db}`)

app.use(bodyParser())
// Log routes being hit and returned if debug mode
if (debug) app.use(logger())

// General
app.use(_.get(`/v${version}/`, meta))

app.use(_.get(`/v${version}/address/token`, getTokenAddress))
app.use(_.get(`/v${version}/item/list`, getItems))
app.use(_.get(`/v${version}/item/get/:item`, getItem))

app.use(_.get(`/v${version}/craftables`, getCraftables))
app.use(_.get(`/v${version}/deconstructables`, getDeconstructables))

app.use(_.get(`/v${version}/lootbox/chances`, getChances))
app.use(_.get(`/v${version}/lootbox/items/:rarity`, getLootBoxItems))

app.use(_.get(`/v${version}/recipie/get/:item`, getRecipie))
app.use(_.get(`/v${version}/recipie/deconstruction/get/:item`, getDeconstructionRecipie))

app.use(_.get(`/v${version}/token/balance/:address`, balanceOf))
app.use(_.get(`/v${version}/token/vault/balance`, getVaultBalance))

app.use(_.get(`/v${version}/trade/get/:merchant/:tradeid`, getTrade))
app.use(_.get(`/v${version}/trades/get/:merchant`, getTrades))
app.use(_.get(`/v${version}/trade/cost`, getTradeCost))

// Admin routes
// Core
app.use(_.post(`/v${version}/item/new`, newItem))
app.use(_.post(`/v${version}/item/spawn`, spawnItem))
app.use(_.post(`/v${version}/item/clearAvailability`, clearAvailability))

// Crafter
app.use(_.post(`/v${version}/recipie/new`, newRecipie))
app.use(_.post(`/v${version}/recipie/remove`, removeRecipie))


// LootBox
app.use(_.post(`/v${version}/lootbox/item/add`, addItem))
app.use(_.get(`/v${version}/lootbox/chances/update/:epic/:rare/:uncommon`, updateChance))
app.use(_.get(`/v${version}/lootbox/cost/:cost`, updateLootBoxCost))

// Trade
app.use(_.get(`/v${version}/trade/cost/:cost`, updateTradeCost))


app.use(_.post(`/v${version}/recipie/deconstruction/new`, newDeconstructionRecipie))

app.listen(port)

// 🚀 We have liftoff
console.log(
  chalk.bold(
    chalk.green(
      `${package.name} v${version} listening on port ${port}`.toUpperCase(),
      chalk.blue(`http://localhost:${port}/v${version}/`)
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

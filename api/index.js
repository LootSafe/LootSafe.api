const chalk = require('chalk')
const ngrok = require('ngrok')
const pkg = require('../package.json')
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
  prefix,
  ethereum
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
  getLootBoxCost,
  // Token
  balanceOf,
  getVaultBalance,
  // Trade
  getTrade,
  getTrades,
  getTradeCost,
  updateTradeCost,
  // Events
  fetchEvents,
  // Balance
  tokenBalance,
  itemBalance,
  allBalances
} = require('./routes')

mongoose.connect(`mongodb://localhost/${db}`)

/* TODO
cacheItems()
setInterval(cacheItems, cacheInterval)
*/

// *******************
// --- Middleware ----
// *******************
app.use(cors())
app.use(bodyParser())
app.use(logger())

// *******************
// ---- General ------
// *******************
app.use(_.get(`${prefix}/v${version}/`, meta))
app.use(_.get(`${prefix}/v${version}/address/token`, getTokenAddress))

// *******************
// ------ Items ------
// *******************
app.use(_.get(`${prefix}/v${version}/item/list`, getItems))
app.use(_.get(`${prefix}/v${version}/item/get/:item`, getItem))
app.use(_.get(`${prefix}/v${version}/item/get/address/:address`, getItemByAddress))
app.use(_.get(`${prefix}/v${version}/item/addresses/get`, getItemAddresses))
app.use(_.get(`${prefix}/v${version}/item/ledger`, ledger))

// *******************
// ----- LootBox -----
// *******************
app.use(_.get(`${prefix}/v${version}/lootbox/chances`, getChances))
app.use(_.get(`${prefix}/v${version}/lootbox/cost`, getLootBoxCost))
app.use(_.get(`${prefix}/v${version}/lootbox/items/:rarity`, getLootBoxItems))

// *******************
// ---- Crafting -----
// *******************
app.use(_.get(`${prefix}/v${version}/recipie/get/:item`, getRecipie))
app.use(_.get(`${prefix}/v${version}/recipie/deconstruction/get/:item`, getDeconstructionRecipie))
app.use(_.get(`${prefix}/v${version}/craftables`, getCraftables))
app.use(_.get(`${prefix}/v${version}/deconstructables`, getDeconstructables))


// *******************
// ---- Balance ------
// *******************
app.use(_.get(`${prefix}/v${version}/balance/token/:address`, balanceOf))
app.use(_.get(`${prefix}/v${version}/balance/item/:item/:address`, itemBalance))
app.use(_.get(`${prefix}/v${version}/balance/items/:address`, allBalances))

// Authenticated
// *******************
// ---- General ------
// *******************
app.use(_.post(`${prefix}/v${version}/item/new`, newItem))
app.use(_.post(`${prefix}/v${version}/item/spawn`, spawnItem))
app.use(_.post(`${prefix}/v${version}/item/clearAvailability`, clearAvailability))

// Authenticated
// *******************
// ---- Crafting -----
// *******************
app.use(_.post(`${prefix}/v${version}/recipie/new`, newRecipie))
app.use(_.post(`${prefix}/v${version}/recipie/remove`, removeRecipie))
app.use(_.post(`${prefix}/v${version}/recipie/deconstruction/new`, newDeconstructionRecipie))

// Authenticated
// *******************
// ---- LootBox ------
// *******************
app.use(_.post(`${prefix}/v${version}/lootbox/item/add`, addItem))
app.use(_.get(`${prefix}/v${version}/lootbox/chances/update/:epic/:rare/:uncommon`, updateChance))
app.use(_.get(`${prefix}/v${version}/lootbox/cost/:cost`, updateLootBoxCost))

// Authenticated
// *******************
// ----- Events ------
// *******************
app.use(_.get(`${prefix}/v${version}/events`, fetchEvents))

// *****************************
// ----- Extension Loader ------
// *****************************

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const extensions = getDirectories('./api/extensions')

extensions.map(ext => {
  const manifest = require(`../${ext}/extension.ls.json`)
  const apiInterface = require(`../${ext}/${manifest.api_extension}`)
  const routePrefix = apiInterface.endpoint
  apiInterface.routes.map(route => {
    app.use(_.get(`${prefix}/v${version}/${routePrefix}/${route.endpoint}`, async function (ctx, test) {
      const response = await route.controller(ethereum.provider, ...arguments)
      ctx.body = response
    }))
  })
  console.log(`Loaded module ${ext}`)
})

app.listen(port)

// 🚀 We have liftoff
console.log(
  chalk.bold(
    chalk.green(
      `${pkg.name} ${prefix}/v${version} listening on port ${port}`.toUpperCase(),
      chalk.blue(`http://localhost:${port}/${prefix}/v${version}/`)
    )
  )
)

if (debug) {
  ngrok.connect(9090, (err, url) => {
    if (err) {
      console.log('Error connecting ngrok', err)
    }
    console.log(
      chalk.bold(
        chalk.gray(
          `Debug Enabled, ngrok available at`.toUpperCase(),
          url
        )
      )
    )
  })
}

require('./watchers')

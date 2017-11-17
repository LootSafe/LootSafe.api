const chalk = require('chalk')
const ngrok = require('ngrok')
const package = require('../package.json')
const _ = require('koa-route')
const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

const {
  eth
} = require('./modules')

const {
  port,
  version,
  debug
} = require('../config')

const {
  meta,
  getTokenAddress,
  newItem,
  getItems,
  getItem
} = require('./routes')

const {
  accessControl
} = require('./middleware')

app.use(bodyParser())
// Log routes being hit and returned if debug mode
if (debug) app.use(logger())

// General
app.use(_.get(`/v${version}/`, meta))

app.use(_.get(`/v${version}/address/token`, getTokenAddress))
app.use(_.get(`/v${version}/item/list`, getItems))
app.use(_.get(`/v${version}/item/get/:item`, getItem))
// Admin routes
app.use(_.post(`/v${version}/item/new`, newItem))

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
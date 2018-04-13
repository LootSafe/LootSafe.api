const { fetchEvents } = require('../../controllers')

module.exports = async (ctx) => {
  const events = await fetchEvents()

  ctx.status = 200
  ctx.body = {
    status: 200,
    message: 'Events Fetched',
    data: events
  }
}

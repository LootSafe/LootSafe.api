const { fetchEvents } = require('../../controllers')

module.exports = async (ctx) => {
  const events = await fetchEvents()
  ctx.body = {
    status: 200,
    message: 'Events Fetched',
    data: events
  }
}
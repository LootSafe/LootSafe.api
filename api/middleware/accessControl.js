const { accessControl } = require('../../config')

module.exports = async function access(ctx, next) {
  if (ctx.request.headers && ctx.request.headers.key === accessControl.key) {
    next()
  } else {
    ctx.body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

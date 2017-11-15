const { accessControl } = require('../../config')

module.exports = async function access(args, next) {
  if (args[0].request.headers && args[0].request.headers.key === accessControl.key) {
    next.apply(args[0], args)
  } else {
    args[0].body = {
      status: 401,
      message: 'Unauthorized access!'
    }
  }
}

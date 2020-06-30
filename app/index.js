const start = require('./presentation/http')
const container = require('./container')

const manager = container.resolve('exchangeManager')

start(manager)

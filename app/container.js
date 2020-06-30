const awilix = require('awilix') // https://github.com/inversify/InversifyJS
const axios = require('axios')

const ExchangeManager = require('./application/ExchangeManager')
const ExchangeRateRepository = require('./application/ExchangeRateRepository')
const ExchangeRatesApiIo = require('./infrastructure/remoteApi/ExchangeRatesApiIo')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

container.register({
  http: awilix.asValue(axios),
  exchangeManager: awilix.asClass(ExchangeManager),
  exchangeRateRepo: awilix.asClass(ExchangeRateRepository),
  exchangeRateRemoteApi: awilix.asClass(ExchangeRatesApiIo)
})

module.exports = container
const awilix = require('awilix') // https://github.com/inversify/InversifyJS
const axios = require('axios')
const redis = require('then-redis')

const ExchangeManager = require('./application/ExchangeManager')
const ExchangeRateRepository = require('./application/ExchangeRateRepository')
const ExchangeRatesApiIo = require('./infrastructure/remoteApi/ExchangeRatesApiIo')
const RedisStore = require('./infrastructure/localStore/RedisStore')
const MetricManager = require('./application/MetricManager')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
})

container.register({
  http: awilix.asValue(axios),
  redis: awilix.asValue(redis.createClient({ host: '0.0.0.0' })),
  metrics: awilix.asClass(MetricManager),
  exchangeManager: awilix.asClass(ExchangeManager),
  exchangeRateRepo: awilix.asClass(ExchangeRateRepository),
  exchangeRateRemoteApi: awilix.asClass(ExchangeRatesApiIo),
  exchangeRateLocalStore: awilix.asClass(RedisStore),
})

module.exports = container

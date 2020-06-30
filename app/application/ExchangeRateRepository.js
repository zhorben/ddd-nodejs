const ExchangeRate = require('../domain/ExchangeRate')
const ExchangeRateRemoteApi = require('./ExchangeRateRemoteApi')

class ExchangeRateRepository {
  constructor() {
    this.apiClient = new ExchangeRateRemoteApi()
  }

  async get(from, to, date) {
    const rate = await this.apiClient.get(from, to, date)

    return rate
  }
}

module.exports = ExchangeRateRepository

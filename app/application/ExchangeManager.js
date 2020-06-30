const convert = require('../domain/convert')

class ExchangeManager {
  constructor({ exchangeRateRepo, metrics }) {
    this.repo = exchangeRateRepo
    this.metrics = metrics
  }

  async convert(price, targetCurrency) {
    await this.metrics.sendCurrency(price.currency, targetCurrency)

    const rate = await this.repo.get(price.currency, targetCurrency, new Date())

    return convert(price, targetCurrency, rate)
  }
}

module.exports = ExchangeManager

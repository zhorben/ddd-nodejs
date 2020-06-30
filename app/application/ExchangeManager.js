const convert = require('../domain/convert')

class ExchangeManager {
  constructor({ exchangeRateRepo }) {
    this.repo = exchangeRateRepo
  }

  async convert(price, targetCurrency) {
    const rate = await this.repo.get(price.currency, targetCurrency, new Date())

    return convert(price, targetCurrency, rate)
  }
}

module.exports = ExchangeManager

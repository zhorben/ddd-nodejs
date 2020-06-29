const ExchangeRateRepository = require('./ExchangeRateRepository');
const convert = require('../domain/convert');

class ExchangeManager {
  constructor() {
    this.repo = new ExchangeRateRepository();
  }

  async convert(price, targetCurrency) {
    const rate = await this.repo.get(
      price.currency,
      targetCurrency,
      new Date(),
    );

    return convert(price, targetCurrency, rate);
  }
}

module.exports = ExchangeManager;

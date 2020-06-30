const Price = require('./Price')

function convert(price, targetCurrency, exchangeRate) {
  if (
    targetCurrency.label !== exchangeRate.to.label ||
    price.currency.label !== exchangeRate.from.label
  ) {
    throw new Error('Invalid ExchangeRate')
  }

  const newValue = price.value * exchangeRate.rate

  return new Price(newValue, targetCurrency)
}

module.exports = convert

const convert = require('../convert.js')
const Price = require('../Price')
const Currency = require('../Currency')
const ExchangeRate = require('../ExchangeRate')

describe('convert', () => {
  test('should return price for non-changed currency', () => {
    const price = new Price(1000, new Currency('usd'))
    const targetCurrency = new Currency('usd')
    const rate = new ExchangeRate(price.currency, targetCurrency, 1, new Date())

    const actual = convert(price, targetCurrency, rate)

    expect(actual.value).toBe(1000)
    expect(actual.currency.label).toBe('usd')
  })

  test('should return converted price for changed currency', () => {
    const originalCurrency = new Currency('usd')
    const targetCurrency = new Currency('rub')

    const rate = new ExchangeRate(originalCurrency, targetCurrency, 75, new Date())
    const price = new Price(1000, originalCurrency)

    const actual = convert(price, targetCurrency, rate)

    expect(actual.value).toBe(75000)
    expect(actual.currency.label).toBe('rub')
  })

  test('should through error for incorrect rate', () => {
    const price = new Price(1000, new Currency('usd'))
    const rate = new ExchangeRate(new Currency('thb', new Currency('rub'), 0.4))

    const actual = convert(price, new Currency('rub'), rate)

    expect(() => convert(price, new Currency('rub'), rate)).toThrow()
  })
})

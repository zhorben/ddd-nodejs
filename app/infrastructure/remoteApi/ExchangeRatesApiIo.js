const { format } = require('date-fns')

const ExchangeRate = require('../../domain/ExchangeRate')

const API_URL = 'https://api.exchangeratesapi.io'

class ExchangeRatesApiIo {
  constructor({ http }) {
    this.http = http
  }

  async get(from, to, date) {
    const dateQuery = format(date, 'yyyy-MM-dd')
    const baseQuery = from.label.toUpperCase()
    const symbolsQuery = to.label.toUpperCase()

    return this.http
      .get(`${API_URL}/${dateQuery}?base=${baseQuery}&symbols=${symbolsQuery}`)
      .then((response) => response.data)
      .then((data) => data.rates[symbolsQuery])
      .then((rate) => parseFloat(rate))
      .then((rate) => new ExchangeRate(from, to, rate, date))
  }
}

module.exports = ExchangeRatesApiIo

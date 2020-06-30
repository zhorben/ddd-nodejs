class ExchangeRateRepository {
  constructor({ exchangeRateRemoteApi }) {
    this.apiClient = exchangeRateRemoteApi
  }

  async get(from, to, date) {
    const rate = await this.apiClient.get(from, to, date)

    return rate
  }
}

module.exports = ExchangeRateRepository

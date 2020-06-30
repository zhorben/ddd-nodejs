class ExchangeRateRepository {
  constructor({ exchangeRateRemoteApi, exchangeRateLocalStore }) {
    this.apiClient = exchangeRateRemoteApi
    this.localStore = exchangeRateLocalStore
  }

  async get(from, to, date) {
    const localRate = await this.localStore.get(from, to, date)

    if (localRate) return localRate

    const rate = await this.apiClient.get(from, to, date)

    await this.localStore.set(rate)

    return rate
  }
}

module.exports = ExchangeRateRepository

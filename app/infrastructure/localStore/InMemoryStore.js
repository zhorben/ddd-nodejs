const { format } = require('date-fns')

class InMemoryStore {
  store = new Map()

  async get(from, to, date) {
    const key = this.getKey(from, to, date)

    return this.store.get(key)
  }

  async set(rate) {

    const key = this.getKey(rate.from, rate.to, rate.date)

    return this.store.set(key, rate)
  }

  getKey(from, to, date) {
    return `${from.label.toUpperCase()}_${to.label.toUpperCase()}_${format(date, 'yyyy-MM-dd')}`
  }
}

module.exports = InMemoryStore
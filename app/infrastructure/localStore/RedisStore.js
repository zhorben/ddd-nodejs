const { format } = require('date-fns')

class RedisStore {
  constructor({ redis }) {
    this.redis = redis
  }

  async get(from, to, date) {
    const key = this.getKey(from, to, date)
    const value = await this.redis.get(key)

    if (!value) return null

    return JSON.parse(value)
  }

  async set(rate) {
    const key = this.getKey(rate.from, rate.to, rate.date)

    return await this.redis.set(key, JSON.stringify(rate))
  }

  getKey(from, to, date) {
    return `${from.label.toUpperCase()}_${to.label.toUpperCase()}_${format(date, 'yyyy-MM-dd')}`
  }
}

module.exports = RedisStore
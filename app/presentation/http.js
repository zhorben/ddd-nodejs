const fastify = require('fastify')({ logger: true })

const Price = require('../domain/Price')
const Currency = require('../domain/Currency')

async function start(manager) {
  fastify.get('/', async ({ query }) => {
    const priceCurrencyLabel = query.from
    const priceValue = query.value
    const targetCurrencyLabel = query.to

    const price = new Price(priceValue, new Currency(priceCurrencyLabel))
    const targetCurrency = new Currency(targetCurrencyLabel)

    const convertedPrice = await manager.convert(price, targetCurrency)

    return convertedPrice
  })

  await fastify.listen(3000, '0.0.0.0')

  console.log('HTTP server started')
}

module.exports = start

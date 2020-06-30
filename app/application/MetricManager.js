class MetricManager {
  sendCurrency(from, to) {
    console.log(`Metric! From: ${from.label}, to: ${to.label}`)
  }
}

module.exports = MetricManager
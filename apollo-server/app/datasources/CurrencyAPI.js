const {RESTDataSource} = require("@apollo/datasource-rest");

class CurrencyAPI extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = 'http://api.exchangeratesapi.io/v1/latest';
  }

  async getUSDPriceFromEUR(amount) {
    const {rates} = await this.get(`?access_key=${process.env.CURRENCY_API}&base=EUR&symbols=USD`);
    return (amount * rates.USD).toFixed(2);
  }
}

module.exports = CurrencyAPI;

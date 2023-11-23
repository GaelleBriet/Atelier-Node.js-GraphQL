module.exports = {
  price: async ({ price }, _, { DS }) => ({
    euros: price,
    // The conversion from euros to dollars is not implemented yet.
    // Here are some example of APIs that could be used as a RESTDataSource:
    // - https://apilayer.com/marketplace/exchangerates_data-api
    // - https://freecurrencyapi.com/
    dollars: await DS.currency.getUSDPriceFromEUR(price)
  })
};

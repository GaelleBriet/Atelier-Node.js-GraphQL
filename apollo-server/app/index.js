const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

const ScalarDate = require("./resolvers/scalars/Date");

module.exports = {
  typeDefs,
  resolvers: {Date: ScalarDate, ...resolvers},
};

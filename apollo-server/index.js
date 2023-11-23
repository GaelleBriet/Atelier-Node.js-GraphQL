require("dotenv").config();
const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");

const {typeDefs, resolvers} = require("./app");
const {verify} = require("jsonwebtoken");
const {UNAUTHENTICATED} = require("./app/errors");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const loginCheck = async (req) => {
  const token = req.headers['x-token'] || ""
  if (!token) return false;
  try {
    return verify(token, process.env.SECRET)
  } catch (e) {
    return false;
  }
}

(async () => {
  const options = {
    context: (req) => {
      const user = loginCheck(req);
      if(!user) UNAUTHENTICATED();

      return {
        user,
        DS: require("./app/datasources")
      };
    },
    listen: {
      port: process.env.PORT || 4005,
    }
  };

  const {url} = await startStandaloneServer(server, options);

  console.log(`🚀 Server ready at ${url}`);
})();

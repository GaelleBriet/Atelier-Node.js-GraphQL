require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const { typeDefs, resolvers } = require("./app");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

(async () => {
    const options = {
        context: () => {
            return {
                DS: require("./app/datasources")
            };
        },
        listen: {
            port: process.env.PORT || 4005,
        }
    };

    const { url } = await startStandaloneServer(server, options);

    console.log(`🚀 Server ready at ${url}`);
})();

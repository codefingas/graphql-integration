const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");
const schemas = require("./schemas");
const resolvers = require("./resolvers");

const typeDefs = schemas;

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Graphql server started at ${url}`);
});

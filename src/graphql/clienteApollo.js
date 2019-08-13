import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql/',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloCliente = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
});

export default apolloCliente;

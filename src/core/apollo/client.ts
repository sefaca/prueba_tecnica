import {ApolloClient, InMemoryCache} from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;

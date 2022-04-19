import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: 'https://store.monema.cloud/graphql/vsf',
    cache: new InMemoryCache(),
});

export default client
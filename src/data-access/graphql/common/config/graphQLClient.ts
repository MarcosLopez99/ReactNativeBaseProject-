import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import {IClient} from 'data-access/common/IClient';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://192.168.1.36:5000/api',
});

export const GraphQLClient = (): IClient<
  ApolloClient<NormalizedCacheObject>
> => ({
  client: new ApolloClient({
    cache: cache,
    link: link,
  }),
  initialize() {},
});

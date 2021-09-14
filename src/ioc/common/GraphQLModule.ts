import {ContainerModule, interfaces} from 'inversify';
import {ApolloClient, NormalizedCacheObject} from '@apollo/client';

import {GraphQLClient} from 'data-access/graphql/common/config/graphQLClient';
import {GraphQLMapper} from 'data-access/graphql/common/mapping/graphQLMapper';

import {IClient} from 'data-access/common/IClient';
import {IMapper} from 'data-access/common/IMapper';

import {DataModuleSymbols} from 'data-access/DataAccessModuleSymbols';

const initializeNetworkModule = (bind: interfaces.Bind) => {
  bind<IClient<ApolloClient<NormalizedCacheObject>>>(
    DataModuleSymbols.GRAPHQL_CLIENT,
  ).toDynamicValue(() => {
    const client = GraphQLClient();
    client.initialize();
    return client;
  });

  bind<IMapper>(DataModuleSymbols.GRAPHQL_MAPPER).toDynamicValue(() => {
    const mapper = GraphQLMapper();
    mapper.initialize();
    return mapper;
  });
};

export const NetworkModule = new ContainerModule(initializeNetworkModule);

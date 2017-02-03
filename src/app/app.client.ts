import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://104.236.23.140/graph',
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      if (localStorage.getItem('userToken')) {
        req.options.headers['Authorization'] = localStorage.getItem('userToken');
      }
      next();
    }
  }
]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: (o:any) => {
    if(o.id){
      return `${o.id}`;
    }
    if(o.cursor){
      return `${o.cursor}`;
    }
    return `${o.__typename}-${new Date().getTime()}-${new Date().getTime()}-${Math.floor((Math.random() * 10000) + 1000)}`;
  },
});

export function provideClient(): ApolloClient {
  return client;
}
import React from 'react';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/User/Home';
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://instagraph2019.herokuapp.com/graphql',
});
const client = new ApolloClient({
    link: link,
    cache: cache,
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    }
});

function App() {
  return (
      <ApolloProvider client={client}>
          <CssBaseline />
            <div className="App">
                   <Home />
            </div>
      </ApolloProvider>
  );
}

export default App;

import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/User/Home';

const client = new ApolloClient({
    "uri": "https://instagraph2019.herokuapp.com/graphql"
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

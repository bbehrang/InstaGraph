import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';

import 'typeface-roboto';
import {createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";

import AppRouter from "./Router";
import {GetLoadingStatus} from "./queries/local";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#262626",

        },
        secondary: {
            main: "#999",
            light: "#efefef"
        },
        info: {
            main: '#2196f3'
        }
    }
});


function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        clientState:{
            defaults: {
                loading: {
                    value: false,
                    __typename: "Loading"
                }
            },
            resolvers: {
                Mutation:{
                    setLoading: (parent, args, {cache}) => {
                        cache.writeData({id: "Loading", args});
                    }

                },
                Query:{
                    GetLoading: (parent, args, {cache}) => {
                        const {loading} = cache.readQuery({query: GetLoadingStatus});
                        return loading;
                    }
                }
            }
        },
        uri: 'http://localhost:4000/graphql',

    });
    return (
        <ApolloProvider client={client}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <AppRouter/>
                </div>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;

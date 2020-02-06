import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import 'typeface-roboto';
import {createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";
import Layout from "./components/Common/Layout";

import Home from "./components/Home";
import Profile from "./components/Profile";

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
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Switch>
                            <Route exact path='/profile'>
                                <Layout>
                                    <Profile/>
                                </Layout>
                            </Route>
{/*                            <Route path='/p/:id'>
                                <Layout>
                                    <
                                </Layout>
                            </Route>*/}
                            <Route exact path='/'>
                                <Layout>
                                    <Home/>
                                </Layout>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;

import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Layout from "./components/Common/Layout";
import Profile from "./components/Profile";
import Home from "./components/Home";

import {GetUserQuery} from './queries/query'
import {useQuery} from "@apollo/react-hooks";
import Error from "./components/Common/Error";

function AppRouter(props) {
    const {loading, error, data} = useQuery(GetUserQuery, {
        variables: {id: "5dd55fcb1c9d440000a9d26d"}
    });

    if (error) return (
        <BrowserRouter>
            <Layout>
                <Error error={error} />
            </Layout>
        </BrowserRouter>
    );
    if(loading){
        return (
            <BrowserRouter>
                <Layout loading={loading}/>
            </BrowserRouter>
        )
    }
    if(data){
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/profile'>
                            <Profile/>
                        </Route>
                        <Route exact path='/'>
                            <Home user={data.user ? data.user : null}/>
                        </Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
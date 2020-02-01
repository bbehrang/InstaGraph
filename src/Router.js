import Header from "./components/Common/Header";
import {Grid} from "@material-ui/core";
import Post from "./components/Home/PostList/Post/Post";
import React from "react";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Router(){
    return(
        <Router>
            <Header/>

        </Router>
    );
}

import React from 'react';
import Info from "./Info";
import AVATAR_IMG from '../../img/leo.jpg';
import {Grid} from "@material-ui/core";


function Index(props) {
    return (
        <Grid container item md={12} justify='center'>
            <Grid item xs={12} md={6}>
                <Info img={AVATAR_IMG}/>
            </Grid>

        </Grid>
    );
}

export default Index;
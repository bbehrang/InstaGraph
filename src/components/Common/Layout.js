import React from 'react';

import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    body:{
        marginTop : theme.spacing(4)
    }
}));

export default function Layout(props) {
    const classes = useStyles();
    return (
        <>
            <Grid container justify='center'>
                <Grid item xs={12} md={9}>
                    <Header/>
                </Grid>
                <Grid item sm={12} md={9} className={classes.body}>
                    {props.children}
                </Grid>
            </Grid>
        </>
    );
}
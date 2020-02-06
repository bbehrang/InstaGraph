import React from 'react';

import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import Header from "./Header";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    body: {
        marginTop: theme.spacing(4)
    },
    headerContainer: {
        background: 'white',
        borderBottom: '1px solid rgb(239,239,239)'
    }
}));

export default function Layout(props) {
    const classes = useStyles();

    return (
        <>
            <Grid container justify='center'>
                <Grid container item xs={12} className={classes.headerContainer} justify='center'>
                    <Grid item xs={11} md={10}>
                        <Header/>
                    </Grid>
                    <Box width='100%'>{props.loading ? <LinearProgress/> : ''}</Box>
                </Grid>
                <Grid container item xs={12} justify='center'>
                    <Grid container item sm={12} md={10} className={classes.body}>
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
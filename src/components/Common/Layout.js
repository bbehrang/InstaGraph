import React, {useEffect} from 'react';

import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import Header from "./Header";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import {useQuery} from "@apollo/react-hooks";
import {GetLoadingStatus} from "../../queries/local";

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
    const { data } = useQuery(GetLoadingStatus);
    console.log(data.loading, data.loading.value);
    return (
        <>
            <Grid container justify='center'>
                <Grid container item xs={12} className={classes.headerContainer} justify='center'>
                    <Grid item xs={11} md={10}>
                        <Header/>
                    </Grid>
                    <Box width='100%'>{ (data.loading && data.loading.value) ? <LinearProgress/> : '' }</Box>
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
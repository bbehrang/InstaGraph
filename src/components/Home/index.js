import React from 'react';

import {Grid, Hidden, Box, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import Following from "./User/Following";
import Suggested from "./User/Suggested";
import PostList from "./PostList";
import Avatar from "./User/Avatar";

import AVATAR_IMG from '../../img/leo.jpg';

const useStyles = makeStyles(theme => ({
    rightPanel: {
        [theme.breakpoints.down(1000)]:{
            display:'none'
        }
    }
}));



function Index() {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const hideRightPanel = useMediaQuery('(max-width:1000px)');
    return (
        <Grid container item xs={12} md={12} spacing={isMobile ? 0 : 4}>
            <Grid item xs={12} sm={12} md={hideRightPanel ? 12 : 8}>
                <PostList/>
            </Grid>
            <Hidden smDown>
                <Grid item md={4} className={classes.rightPanel}>
                    <Box>
                        <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
                    </Box>
                    <Following/>
                    <Suggested/>
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Index;
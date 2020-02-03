import React from 'react';
import {Grid, Hidden} from "@material-ui/core";
import PostList from "./PostList";
import Avatar from "./User/Avatar";
import Box from "@material-ui/core/Box";

import AVATAR_IMG from '../../img/leo.jpg';
import Following from "./User/Following";
import Suggested from "./User/Suggested";


function Index() {
    return (
        <Grid container item md={12} spacing={4}>
            <Grid item xs={12} sm={12} md={8}>
                <PostList/>
            </Grid>
            <Hidden smDown>
                <Grid item md={4}>
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
import React from 'react';
import {Grid} from "@material-ui/core";
import PostList from "./PostList";
import Avatar from "../Common/Avatar";
import Box from "@material-ui/core/Box";

import AVATAR_IMG from '../../img/leo.jpg';
import Following from "./User/Following";
import Suggested from "./User/Suggested";



function Index() {
    return (
        <Grid container spacing={2} justify='center' alignItems='center'>
            <Grid item md={6}>
                <PostList/>
            </Grid>
            <Grid item md={1}>
                <Box>
                    <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
                </Box>
                    <Following/>
                    <Suggested/>

            </Grid>
        </Grid>
    );
}

export default Index;
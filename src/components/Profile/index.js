import React from 'react';
import Info from "./Info";
import AVATAR_IMG from '../../img/leo.jpg';
import {Grid} from "@material-ui/core";
import PostList from "./PostList";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


function Index(props) {
    return (
        <Grid container item md={12} justify='center'>
            <Grid item xs={11} md={8}>
                <Info img={AVATAR_IMG}/>
            </Grid>
            <Grid item xs={12}>
                <Box mt={{xs:1, md:5}} isplay='block' overflow='hidden' component='div'
                     borderTop={1} borderColor='secondary.light' py={3} textAlign='center'>
                    <Typography variant='h6' component='span'>Posts</Typography>
                </Box>
                <PostList/>
            </Grid>

        </Grid>
    );
}

export default Index;
import React from 'react';
import Avatar from "./Avatar";
import AVATAR_IMG from '../../../img/leo.jpg';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    following: {
        overflowX: 'hidden',
        overflowY: 'scroll'
    }
}));


function Following(props) {
    const classes = useStyles();
    return (
        <Box mt={1} p={2} bgcolor='white'
             border={1} borderColor='secondary.light' borderRadius={2}>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle2' component='div' color='secondary'>
                    Following
                </Typography>
                <Typography variant='subtitle2' component='div'>
                    See All
                </Typography>
            </Box>
            <Box maxHeight='223px' mt={2} className={classes.following}>
                <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
                <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
                <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
                <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
            </Box>

        </Box>
    );
}

export default Following;
import React from 'react';
import Avatar from "./Avatar";
import AVATAR_IMG from '../../../img/leo.jpg';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    followButton:{
        color: '#2196f3'
    },
    pointer:{
        cursor: 'pointer'
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
                <Typography variant='subtitle2' component='div' className={classes.pointer}>
                    See All
                </Typography>
            </Box>
            <Box maxHeight='223px' mt={2} overflow='hidden' >
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Avatar img={AVATAR_IMG} name='Leo Dicap' shouldShowSub={true}/>
                    <Button size='small' className={classes.followButton}>Follow</Button>
                </Box>
            </Box>

        </Box>
    );
}

export default Following;
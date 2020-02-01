import React from 'react';
import {Box, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MuiAvatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    username : {
        marginLeft: theme.spacing(1)
    }
}));

function Avatar(props) {
    const classes = useStyles();
    return (
        <Box display='flex' alignItems='center' component='header' p={2}>
            <Link href='#' color='primary'>
                <MuiAvatar alt="Remy Sharp" src={props.img}/>
            </Link>
            <Link href='#' color='primary' variant='subtitle2' className={classes.username}>
                {props.name}
            </Link>
        </Box>
    );
}

export default Avatar;
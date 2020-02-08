import React from 'react';
import {Box, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MuiAvatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    username : {
        marginLeft: theme.spacing(1)
    },
    userSubtitle:{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 'normal',
        fontSize: '0.8rem',
        textDecoration: 'none',
        color: '#999'
    }
}));

function Avatar(props) {
    const classes = useStyles();
    return (
        <Box display='flex' alignItems='center' component='header' p={2}>
            <Link href='#' color='primary'>
                <MuiAvatar alt={props.fullname} src={props.img}/>
            </Link>
            <Link href='#' color='primary' variant='subtitle2' className={classes.username}>
                {props.name}
                {props.shouldShowSub ? <Typography className={classes.userSubtitle}>{props.username}</Typography> : '' }
            </Link>
        </Box>
    );
}

export default Avatar;
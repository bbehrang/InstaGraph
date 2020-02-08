import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MuiAvatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    routerLink: {
        textDecoration: 'none',
    },
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
        <Link to='/#' className={classes.routerLink}>
            <Box display='flex' alignItems='center' py={1.5}>
                <MuiAvatar alt="Remy Sharp" src={props.img}/>
                <Typography href='#' color='primary' variant='subtitle2' className={classes.username}>
                    {props.name}
                    {props.shouldShowSub ? <Typography className={classes.userSubtitle}>{props.username}</Typography> : '' }
                </Typography>
            </Box>
        </Link>

    );
}

export default Avatar;
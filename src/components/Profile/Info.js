import React from 'react';
import {Box} from "@material-ui/core";
import MuiAvatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: '150px',
        height: '150px'
    },
    name:{
        paddingBottom: theme.spacing(2),
        fontWeight: 'normal',
    },
    info: {
        fontWeight: 'normal',
        marginRight: theme.spacing(2),
    },
    bold:{
        fontWeight:500
    },
    fullName:{
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    description:{
        paddingBottom: theme.spacing(2)
    }

}));

function Info(props) {
    const classes = useStyles();
    return (
        <Box display='flex' alignItems='center'>
            <MuiAvatar src={props.img} className={classes.avatar}/>
            <Box ml={3}>
                <Typography variant='h4' component='h2' display='block' className={classes.name}>
                    Leonardo Dicaprio
                </Typography>
                <Typography variant='subtitle1' component='span' className={classes.info}>
                    <b className={classes.bold}>106</b> posts
                </Typography>
                <Typography variant='subtitle1' component='span' className={classes.info}>
                    <b className={classes.bold}>304</b> followers
                </Typography>
                <Typography variant='subtitle1' component='span' className={classes.info}>
                    <b className={classes.bold}>304</b> following
                </Typography>
                <Typography variant='body1' component='div' className={classes.fullName}>
                    <b>Leonardo DiCaprio</b>
                </Typography>
                <Typography variant='body2' component='div' className={classes.description}>
                    Actor and Environmentalist
                    Follow @EarthAlliance to get involved
                    australiawildfirefund.org
                </Typography>
            </Box>
        </Box>
    );
}

export default Info;
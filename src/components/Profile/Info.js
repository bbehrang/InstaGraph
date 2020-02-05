import React from 'react';
import {Box} from "@material-ui/core";
import MuiAvatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: '150px',
        height: '150px',
        margin: '0 auto'
    },
    name: {
        paddingBottom: theme.spacing(2),
        fontWeight: 'normal',
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing(2),
            textAlign: 'center'
        }
    },
    info: {
        fontWeight: 'normal',
    },
    bold: {
        fontWeight: 500
    },
    fullName: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    description: {
        paddingBottom: theme.spacing(2)
    }

}));

function Info(props) {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Grid item xs={12} md={5}>
                <MuiAvatar src={props.img} className={classes.avatar}/>
            </Grid>

            <Grid item xs={12} md={7}>
                <Typography variant='h4' component='h2' display='block' className={classes.name}>
                    Leonardo Dicaprio
                </Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1' component='span' className={classes.info}>
                        <b className={classes.bold}>106</b> posts
                    </Typography>
                    <Typography variant='subtitle1' component='span' className={classes.info}>
                        <b className={classes.bold}>304</b> followers
                    </Typography>
                    <Typography variant='subtitle1' component='span' className={classes.info}>
                        <b className={classes.bold}>304</b> following
                    </Typography>
                </Box>
                <Box mt={{xs:1}}>
                    <Typography variant='body1' component='div' className={classes.fullName}>
                        <b>Leonardo DiCaprio</b>
                    </Typography>
                    <Typography variant='body2' component='div' className={classes.description}>
                        Actor and Environmentalist
                        Follow @EarthAlliance to get involved
                        australiawildfirefund.org
                    </Typography>
                </Box>

            </Grid>
        </Grid>
    );
}

export default Info;
import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function Error(props) {
    return (
        <Grid container justify='center' item xs={11}>
            <Typography variant='h4' component='h2' align='center'>
                Oops...Something went wrong!
            </Typography>
            <Box mt={5}>
                <Typography variant = 'body1'>
                    Try again and if error persists, please contact support<br/>
                    {props.error ? props.error : ''}
                </Typography>
            </Box>
        </Grid>

    );
}

export default Error;
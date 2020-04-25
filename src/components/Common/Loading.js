import React from 'react';

import Box from "@material-ui/core/Box";
import LinearProgress from '@material-ui/core/LinearProgress';



function Loading(props) {
    return (
            <Box display='flex' width='100%' height='5px' justifyContent='center'>
                <LinearProgress/>
            </Box>
    );

}

export default Loading;
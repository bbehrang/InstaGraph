import React, {useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        padding: '0px',
        border: 'none',
        background: 'transparent',
    },
    iconsLast: {
        flexGrow: 1,
        textAlign: 'right'
    }
}));

function Actions(props) {
    const classes = useStyles();
    const [like, setLike] = useState(false);
    useEffect(() => {

    }, []);
    const handleLike = e => {


    };

    return (
        <Box display='flex' py={2}>
            <Box className={classes.icons}>
                <IconButton color='primary'>
                    <FavoriteBorderIcon onClick={handleLike}/>
                </IconButton>
            </Box>
            <Box className={classes.icons}>
                <IconButton color='primary'>
                    <ChatBubbleOutlineIcon/>
                </IconButton>
            </Box>
            <Box justifySelf='flex-end' className={`${classes.postActions} ${classes.iconsLast}`}>
                <IconButton color='primary'>
                    <ShareIcon/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Actions;
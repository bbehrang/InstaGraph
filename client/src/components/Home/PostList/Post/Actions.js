import React, {useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import {makeStyles} from "@material-ui/core/styles";
import {Favorite} from "@material-ui/icons";
import {useMutation} from "@apollo/react-hooks";
import {PostLikeMutation} from "../../../../queries/mutation";

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


const id = "5dd55fcb1c9d440000a9d26d";

function Actions(props) {
    const classes = useStyles();
    const {likes, postAuthor, postId} = props;
    const [like, setLike] = useState(false);
    const [sendLike] = useMutation(PostLikeMutation);

    useEffect(() => {
        likes.filter(like => like.id === id).length > 0 ? setLike(true) : setLike(false);
    }, [likes]);
    const handleLike = async (e) => {
        e.preventDefault();
        try {
            const res = await sendLike({
                variables: {postId: postId, postAuthor: postAuthor, userLiked: id},
            });
            setLike(!like);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box display='flex' py={2}>
            <Box className={classes.icons}>
                <IconButton color='primary' onClick={handleLike}>
                    {like ? <Favorite/> : <FavoriteBorderIcon/>}
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
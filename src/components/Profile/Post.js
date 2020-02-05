import React, {useRef} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CommentList from '../Home/PostList/Post/Comment/List';
import CommentAdd from '../Home/PostList/Post/Comment/Add';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    postBody: {
        background: 'white'
    },
    imageContainer: {
        maxHeight: 600,

    },
    image: {
        width: '100%',
        height: '100%',
        maxHeight: 600,
        objectFit: 'cover'

    }
}));

function Post(props) {
    const classes = useStyles();

    const postBodyRef = useRef(null);
    const postImageRef = useRef(null);

    return (
        <>
            <Grid item md={6} className={classes.imageContainer}>
                <img src={props.post.img} className={classes.image} ref={postImageRef} alt='alt'/>
            </Grid>
            <Grid item md={6} className={classes.postBody} ref={postBodyRef}>
                <Box p={2} height='100%' display='flex' flexWrap='wrap' alignContent='space-between'>
                    <Box width='100%'>
                        <CommentList comments={props.post.comments} shouldShowAvatar={true} shouldAddElipsis={false}/>
                    </Box>
                    <CommentAdd/>
                </Box>
            </Grid>
        </>
    );
}

export default Post;
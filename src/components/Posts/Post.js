import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    postImage: {
        maxWidth : "100%"
    },


}));
const Post = ({post}) =>{
    const classes = useStyles();
    return (<div>
        <img src={post.media} alt={post.caption} className={classes.postImage}/>
    </div>)
};
export default Post;
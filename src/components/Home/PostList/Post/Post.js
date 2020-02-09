import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import Caption from "./Caption";
import AddComment from "./Comment/Add";
import Actions from "./Actions";
import CommentList from "./Comment/List";
import Avatar from "../../../Common/Avatar";
import Error from "../../../Common/Error";

const useStyles = makeStyles(theme => ({
    postImage: {
        maxHeight: '750px',
        objectFit: 'contain'
    },
    postBody: {
        maxHeight: '750px',
        textAlign: 'center'
    },
}));

export default function Post(props) {

    const classes = useStyles();
    const {post}  = props;
    if(post){
        return (
            <Box display='block' overflow='hidden' component='article'
                 border={1} borderColor='secondary.light' borderRadius={2} mb={5} bgcolor='white'>
                <Avatar username={post.author.username} fullname ={post.author.fullname} img={post.author.avatar}/>
                <div className={classes.postBody}>
                    <img src={post.post.media} alt='post' className={classes.postImage}/>
                </div>
                <Box width="95%" mx="auto">
                    <Actions postId={post.post.id} postAuthor={post.author.id} likes={post.post.likes}/>
                    <Box px={2}>
                        <Caption author={post.author.username} body={post.post.caption}/>
                        <CommentList comments={post.post.comments} shouldAddElipsis={true}/>
                        <AddComment/>
                    </Box>
                </Box>
            </Box>
        );
    }
    else return (<Error error="Post couldn't be fetched"/>);

}
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
        width: '100%',
        maxHeight: '750px',
        objectFit: 'cover'
    },
    postBody: {
        maxHeight: '750px'
    },
}));

export default function Post(props) {
    const classes = useStyles();
    if(props.post){
        return (
            <Box display='block' overflow='hidden' component='article'
                 border={1} borderColor='secondary.light' borderRadius={2} mb={5} bgcolor='white'>
                <Avatar name={props.post.author.fullname} img={props.post.author.avatar}/>
                <div className={classes.postBody}>
                    <img src={props.post.media} alt='post' className={classes.postImage}/>
                </div>
                <Box width="95%" mx="auto">
                    <Actions/>
                    <Box px={2}>
                        <Caption />
                        <CommentList comments={props.post.comments} shouldAddElipsis={true}/>
                        <AddComment/>
                    </Box>
                </Box>
            </Box>
        );
    }
    else return (<Error error="Post couldn't be fetched"/>);

}
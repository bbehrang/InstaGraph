import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import AVATAR_IMG from '../../../../img/leo.jpg';
import POST_IMG from '../../../../img/post.jpg';

import Caption from "./Caption";
import AddComment from "./Comment/Add";
import Actions from "./Actions";
import CommentList from "./Comment/List";
import Avatar from "../../../Common/Avatar";

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

export default function Post() {
    const classes = useStyles();

    return (
        <Box display='block' overflow='hidden' component='article'
             border={1} borderColor='secondary.light' borderRadius={2} mb={5} bgcolor='white'>
            <Avatar name='Leo DiCaprio' img={AVATAR_IMG}/>
            <div className={classes.postBody}>
                <img src={POST_IMG} alt='post' className={classes.postImage}/>
            </div>
            <Box width="95%" mx="auto">
                <Actions/>
                <Box px={2}>
                    <Caption/>
                    <CommentList/>
                    <AddComment/>
                </Box>
            </Box>
        </Box>
    );
}
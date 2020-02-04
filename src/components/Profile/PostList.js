import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {makeStyles} from "@material-ui/core/styles";

import POST_IMG from '../../img/post.jpg';
import AVATAR_IMG from '../../img/leo.jpg';
import {Link} from "react-router-dom";
import Modal from "../Common/Modal";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 'auto',
        paddingBottom: theme.spacing(4)
    },
}));

const COMMENTS = [
    {avatar: AVATAR_IMG, author: 'behrang', body: 'hello this is a good comment'},
    {
        avatar: AVATAR_IMG,
        author: 'behrang',
        body: 'very nice photo you are a true artist thanks for reading this comment send me 4$ please'
    },
    {author: 'behrang', body: 'god damn you is great, come to the hood we finna pop a henny'},
    {author: 'behrang', body: 'hell yea'}
];

const posts = [
    {img: POST_IMG, title: 'test', comments: COMMENTS},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
    {img: POST_IMG, title: 'test'},
];

function PostList(props) {
    const classes = useStyles();

    const [showModal, setShowModal] = useState(false);

    const handleOpen = e => {
      e.preventDefault();
      setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal open={showModal} handleClose={handleClose} post={posts[0]}/>
            <GridList cellHeight={293} spacing={32} className={classes.gridList} cols={3}>
                {posts.map((post, id) => (
                    <GridListTile key={id} cols={post.cols || 1} component={Link} to='/1' onClick={handleOpen}>
                        <img src={post.img} alt={post.title}/>
                    </GridListTile>
                ))}
            </GridList>
        </>
    );
}

export default PostList;
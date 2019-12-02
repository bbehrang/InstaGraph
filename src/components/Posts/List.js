import React, {useState, useEffect} from 'react';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GetPostsQuery} from "../../queries/query";


import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import Grid from "@material-ui/core/Grid";
import 'typeface-roboto';
import {Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ListHoc from "../ListHoc";



const useStyles = makeStyles(theme => ({
    bigAvatar: {
        width: '100%',
        height: '100%',
    },
    gridList: {
        width: "100%",
    },
    postList:{
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    postContainer: {
        position: 'absolute',
        zIndex : '2',
        background:' rgba(0,0,0,0.5)',
        minHeight: "100%"

    },
    modalContainer: {
        position:'relative',
        overflow: 'hidden',



    },
    modalItem:{
        minWidth : '60%'
    }


}));

const showCss = {
    display: 'flex'
};
const hideCss = {
    display: 'none'
};



const PostList = (props) => {
    const [getUser, {loading, error , data}] = useLazyQuery(GetPostsQuery);
    useEffect(() => {
        getUser({
            variables: { id: props.id},
            options: {fetchPolicy: 'network-only'}
        });
    },[]);
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({});
    const [user, setUser] = useState(null);

    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const showPost = (e) => {
        const postId = e.target.getAttribute('data-id');
        const post = user.posts.find(post => post.id === postId);
        setPost(post);
        handleOpen();
    };
    const addLike = (postLiked) => {
        const postIndex = user.posts.findIndex(post => post.id === postLiked.id);
        if(postIndex > -1){
            setUser((prevUser) => ({
                ...prevUser,
                posts : prevUser.posts.map((post) => {
                    if(post.id !== postLiked.id){
                        return post;
                    }
                    return {
                        ...post,
                        likes : postLiked.likes
                    }
                })
            }));
        }
    };
    const addComment = (postId, postCommented) => {
        const postIndex = user.posts.findIndex(post => post.id === postId);
        if(postIndex > -1){
            setUser((prevUser) => ({
                ...prevUser,
                posts : prevUser.posts.map((post) => {
                    if(post.id !== postId){
                        return post;
                    }
                    return {
                        ...post,
                        comments : [...post.comments, postCommented]
                    }
                })
            }));
        }
    };
    const showModal = () => {
        return  (
            <Grid style={open ? showCss: hideCss} className={classes.postContainer} container spacing={0} direction="column" alignItems="center" justify="center">
                <Grid item sm={12} className={classes.modalItem}>
                    <Button onClick={handleClose} style={{color:"white"}}>Close</Button>
                    <Post addLike={addLike} addComment={addComment} post={post} user=
                        {{
                            id : data.user.id,
                            username: data.user.username,
                            avatar:data.user.avatar
                        }}/>
                </Grid>

            </Grid>


        ) };
    if(loading) return (<h1>Loading...</h1>);
    if(data && data.user && !user ){
        setUser(data.user);
    }
    if(user){
        return(
            <div className={classes.modalContainer}>
                {open ? showModal() : ''}
                <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={3}>
                        <Avatar alt={user.username} src={user.avatar} className={classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={8} sm={9}>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2">
                                {user.username}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                <ListItem>{user.posts.length} posts</ListItem>
                                <ListItem>{user.followers.length} followers</ListItem>
                                <ListItem>{user.following.length} following</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" component="h5">
                                {user.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.postList}>
                    <GridList cellHeight={300} className={classes.gridList} cols={3}>
                        {
                            user.posts.map(post =>
                                <GridListTile onClick={showPost} key={post.id} cols={post.cols || 1}>
                                    <img src={post.media} alt={post.caption} data-id={post.id}/>
                                </GridListTile>
                            )
                        }
                    </GridList>
                </div>
                    <ListHoc/>
                </Container>
            </div>
        );
    }
    else{
        return <h1>Something went wrong</h1>;
    }

};

export default PostList;
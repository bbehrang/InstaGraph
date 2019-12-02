import React, {useState, useEffect} from 'react';
import {useMutation, useApolloClient} from "@apollo/react-hooks";
import {PostLikeMutation, AddCommentMutation} from "../../queries/mutation";
import {getPostsQuery} from "../../queries/query";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({

   card: {
        maxWidth: 700,
    },
    media: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'white',
    },
    avatarImg: {
       maxWidth: '100%'
    },
    comment:{
        display: 'flex',
        alignItems: 'center'
    }
}));



export default function Post({post, user, updatePost, addLike, addComment}) {
    const [like, setLike] = useState(false);
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [sendLike] = useMutation(PostLikeMutation);
    const [sendComment] = useMutation(AddCommentMutation);


        /*update(client, {data: {postLike}}){
            const data = client.cache.readQuery({query: getPostsQuery, variables: {id: user.id}});
            const posts = data.user.posts;
            const postIndex = posts.findIndex(post => post.id === postLike.id);
            posts[postIndex].likes = postLike.likes;
            client.cache.writeQuery({
                query: getPostsQuery,
                variables: {id:user.id},
                data: {
                    user: {
                        ...data.user,
                        posts: posts
                        }}
            });
        }*/

    const classes = useStyles();
    useEffect(() => {
        setLike(checkLikes(post));
        console.log(post);
        if(post.comments){
            setAllComments(post.comments.sort(function (a, b) {
                return a.createdAt < b.createdAt;
            }))
        }
    },[post]);
    const checkLikes = (postToCheck) => {
        return postToCheck.likes.filter(like => user.username === like.username).length > 0;
    };


    const handleLike = async (e) => {
        e.preventDefault();
        try{
            const res = await sendLike({
                variables:{postId : post.id, postAuthor: user.id, userLiked: user.id},
            });
            addLike(res.data.postLike);
            setLike(checkLikes(res.data.postLike));
        } catch (e) {
            console.log(e);
        }
    };
/*    const calculateDate = () => {
        let utcSeconds = post.createdAt / 1000;
        let d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        return (d.toLocaleDateString());
    };*/
    const handleChange = (e) => {
        const commentBody = e.target.value;
        setComment(commentBody);
    };
    const submitComment = async (e) => {
        e.preventDefault();
        try{
            const res = await sendComment({
                variables:{postId : post.id, postAuthor: user.id, commentAuthor: user.id, commentBody: comment},
            });
            if(res.data.addComment.id){
                addComment(post.id, res.data.addComment);
                setAllComments(() => [...allComments, res.data.addComment]);
                setComment('');
            }
        }
        catch (e) {
            console.log(e);
        }

    };
    return (
        <Card className={classes.card}>
            <Grid container>
                <Grid item sm={6}>
                    <CardMedia
                        className={classes.media}
                        image={post.media}
                        title={post.caption}
                    />
                </Grid>
                <Grid item sm={6}>
                    <Grid item xs={12}>
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src={user.avatar} alt={user.username} className={classes.avatarImg}/>
                        </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.caption}
                            </Typography>
                        </CardContent>

                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            {allComments.map((comment,i) =>
                                <div className={classes.comment} key={i}>
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <img src={comment.author.avatar} alt={comment.author.username} className={classes.avatarImg}/>
                                    </Avatar>
                                    <Typography variant="body2" color="textPrimary" component="p" style={{marginLeft: '5px'}}>
                                        {comment.author.username}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{marginLeft: '5px'}}>
                                        {comment.body}
                                    </Typography>
                                </div>
                            )}

                        </CardContent>

                    </Grid>
                <Grid item xs={12}>
                    <CardActions disableSpacing>

                        <IconButton aria-label="add to favorites" onClick={handleLike}>
                            {like ? <Favorite /> : <FavoriteBorder/>}
                        </IconButton>
                        <IconButton aria-label="share">
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        <TextField id="standard-basic" label="Add comment" value={comment} onChange={handleChange}/>
                        <Button disabled={!(comment.length > 0)} onClick={submitComment}>Post</Button>
                    </CardActions>
                </Grid>
                </Grid>
            </Grid>



        </Card>
    );
}
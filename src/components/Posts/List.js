import React, {useState, useEffect} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
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
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

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

}));
const getPostsQuery = gql`

   query user($id: ID!){
    user(id: $id){
        username
        fullname
        description
        avatar
        posts{
            id
            caption
            media
            likes{
                username
                avatar
            }
            createdAt
            comments{
                id
                body
                author{
                    username
                    avatar
                }
                createdAt
            }
        }
        followers{
            username
            avatar
        }
        following{
            username
            avatar
        }
    }
  }

`;




const PostList = (props) => {
    const {loading, error , data} = useQuery(getPostsQuery, {variables: { id: props.id}});
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({});
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const showPost = (e) => {
        const postId = e.target.getAttribute('data-id');
       const post = data.user.posts.find(post => post.id === postId);
       setPost(post);
       handleOpen();
    };
    const showModal = () => {
      return (
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
          >
              <Card className={classes.card}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={post.media}
                          title={post.caption}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {data.user.username}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {post.caption}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="primary">
                          Share
                      </Button>
                      <Button size="small" color="primary">
                          Learn More
                      </Button>
                  </CardActions>
              </Card>
          </Modal>

      );
    };
    if(loading) return (<h1>Loading...</h1>);

    return(
        <>
            {open ? showModal() : ''}
            <Grid container spacing={2}>
                <Grid item xs={4} sm={3}>
                    <Avatar alt={data.user.username} src={data.user.avatar} className={classes.bigAvatar}/>
                </Grid>
                <Grid item xs={8} sm={9}>
                    <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                        {data.user.username}
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            <ListItem>{data.user.posts.length} posts</ListItem>
                            <ListItem>{data.user.followers.length} followers</ListItem>
                            <ListItem>{data.user.following.length} following</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" component="h5">
                            {data.user.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.postList}>
                <GridList cellHeight={300} className={classes.gridList} cols={3}>
                    {
                        data.user.posts.map(post =>
                            <GridListTile onClick={showPost} key={post.id} cols={post.cols || 1}>
                                <img src={post.media} alt={post.caption} data-id={post.id}/>
                            </GridListTile>
                        )
                    }
                </GridList>
            </div>

        </>
    );
};

export default PostList;
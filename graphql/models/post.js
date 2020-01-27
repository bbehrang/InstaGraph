import graphql from "graphql";

import User from '../../models/users.js';
import {UserType} from './user.js';
import {CommentType} from "./comment.js";

const {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} = graphql;

export const PostType = new GraphQLObjectType({
    name: 'Post',
    fields : () => ({
        id: {type: GraphQLID},
        caption: {type: GraphQLString},
        media: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        likes : {type: new GraphQLList(UserType)},
        comments: {type: new GraphQLList(CommentType)}
    })
});
//Resolvers
export async function getPostsByUser(id){
    try{
        const user = await User.findById(id);
        const users = await User.find({_id : {$in : user.following}}).select("posts");
        const mappedPosts = users.map(user => user.posts);
        const posts = [].concat.apply([], mappedPosts);
        return posts;
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
export async function likePost(postId, postAuthor, userLiked){
    try{
        const user = await User.findById(postAuthor)
            .populate('posts.likes', 'username avatar _id');
        const index = user.posts.findIndex((post => post.id.toString() === postId));
        const like = user.posts[index].likes.findIndex(like => like._id.toString() === userLiked);
        if(like >= 0){
            user.posts[index].likes.splice(like, 1);
        }
        else{
            const liked = await User.findById(userLiked);
            user.posts[index].likes.push({_id: liked._id, username: liked.username, avatar:liked.avatar});
        }
        const saved = await user.save();
        return user.posts[index];
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
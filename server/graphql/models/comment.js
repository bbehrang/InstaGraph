import graphql from "graphql";

import User from '../../models/users.js';
import {UserType} from "./user.js";

const {GraphQLID, GraphQLObjectType, GraphQLString} = graphql;

export const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields : () => ({
        id: {type: GraphQLID},
        body: {type: GraphQLString},
        author: {type: UserType},
        createdAt: {type: GraphQLString},
    })
});
//Resolvers
export async function addComment(postId, postAuthor, commentAuthor, commentBody){
    try{
        const user = await User.findById(postAuthor)
            .populate('posts.comments.author', 'username avatar _id');
        const index = user.posts.findIndex(post => post.id.toString() === postId);
        if(index > -1){
            const author = await User.findById(commentAuthor).select('username avatar');
            const comment = {
                id: mongoose.Types.ObjectId(),
                body: commentBody,
                author: author,
            };
            user.posts[index].comments.push(comment);
            const saved = await user.save();
            return comment;
        }

    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
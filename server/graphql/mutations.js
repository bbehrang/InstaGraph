import graphql from "graphql";

import {likePost, PostType} from "./models/post.js";
import {follow} from "./models/user.js";
import {addComment, CommentType} from "./models/comment.js";

const {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLBoolean, GraphQLString} = graphql;

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields : {
        postLike: {
            type: PostType,
            args : {
                postId: {type: new GraphQLNonNull(GraphQLID)},
                postAuthor: {type: new GraphQLNonNull(GraphQLID)},
                userLiked : {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: async(parent, args)=>{
                return await likePost(args.postId, args.postAuthor, args.userLiked);
            }
        },
        addComment: {
            type: CommentType,
            args: {
                postId: {type: new GraphQLNonNull(GraphQLID)},
                postAuthor: {type: new GraphQLNonNull(GraphQLID)},
                commentAuthor: {type: new GraphQLNonNull(GraphQLID)},
                commentBody: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async(parent, args) => {
                return await addComment(args.postId, args.postAuthor, args.commentAuthor, args.commentBody);
            }
        },
        follow: {
            type: GraphQLBoolean,
            args: {
                user: {type: new GraphQLNonNull(GraphQLID)},
                toFollow: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: async(parent, args) => {
                return await follow(args.user, args.toFollow);
            }
        }
    }
});
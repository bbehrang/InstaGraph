import graphql from "graphql";

import {getAllUsers, getSuggestedById, getUsersById, UserType} from "./models/user.js";
import {getPostsByUser, getFeedByUser, PostType, FeedPostType} from "./models/post.js";

const {GraphQLObjectType, GraphQLID, GraphQLList, GraphQLNonNull} = graphql;

export const RootQuery = new GraphQLObjectType({
    name : 'RootQuery',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: async (parent, args)=>{
                return getAllUsers();
            }
        },
        user: {
            type: UserType,
            args: { id : { type: GraphQLID}},
            resolve(parent, args, context){
                /*const { loaders } = context;
                const { userLoader } = loaders;
                return userLoader.load(args.id);*/
                return getUsersById(args.id);
            }
        },
        suggested: {
            type: new GraphQLList(UserType),
            args: {id : {type: new GraphQLNonNull(GraphQLID)}}  ,
            resolve(parent, args){
                return getSuggestedById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            args: {id : { type: GraphQLID}},
            resolve(parent, args){
                return getPostsByUser(args.id)
            }
        },
        feed: {
            type: new GraphQLList(FeedPostType),
            args: {id : { type: GraphQLID}},
            resolve(parent, args){
                return getFeedByUser(args.id)
            }
        }

    }
});
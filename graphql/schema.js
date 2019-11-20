import User from "../models/users";

const graphql = require('graphql');

import {getAllUsers} from "./resolvers";

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema,
} = graphql;

const CommentType = new GraphQLObjectType({
    name: 'CommentType',
    fields : () => ({
        id: {type: GraphQLID},
        body: {type: GraphQLString},
        author: {type: UserType},
        createdAt: {type: GraphQLString},
    })
});
const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields : () => ({
        id: {type: GraphQLID},
        caption: {type: GraphQLString},
        image: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        likes : {type: new GraphQLList(UserType)},
        comments: {type: new GraphQLList(CommentType)}
    })
});
const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields : () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        fullName: {type: GraphQLString},
        description: {type: GraphQLString},
        avatar: {type: GraphQLString},
        posts : {type : new GraphQLList(PostType)},
        followers : {type: new GraphQLList(UserType)},
        following: {type: new GraphQLList(UserType)}
    })
});

const RootQuery = new GraphQLObjectType({
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
                const { loaders } = context;
                const { userLoader } = loaders;
                return userLoader.load(parent.id);
            }
        }
    }
});




export const schema = new GraphQLSchema({
    query : RootQuery,
});
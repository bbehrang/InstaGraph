import graphql from "graphql";

import User from '../../models/users.js';
import {PostType} from './post.js';

const {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} = graphql;

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields : () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        fullname: {type: GraphQLString},
        description: {type: GraphQLString},
        avatar: {type: GraphQLString},
        posts : {type : new GraphQLList(PostType)},
        followers : {type: new GraphQLList(UserType)},
        following: {type: new GraphQLList(UserType)}
    })
});
//Resolvers
export async function getAllUsers()
{
    try{
        return User.find({})
            .populate('posts.comments.author', 'username avatar')
            .populate('posts.likes', 'username avatar')
            .populate('followers', 'username avatar')
            .populate('following', 'username avatar');
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
export async function getUsersByIds(ids){
    try{
        return await User.find().where('_id').in(ids)
            .populate('posts.comments.author', 'username avatar')
            .populate('posts.likes', 'username avatar')
            .populate('followers', 'username avatar')
            .populate('following', 'username avatar');
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
export async function getUsersById(id){
    try{
        return await User.findById(id)
            .populate('posts.comments.author', 'username avatar')
            .populate('posts.likes', 'username avatar')
            .populate('followers', 'username avatar')
            .populate('following', 'username avatar');
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
export async function getSuggestedById(id){
    try{
        const user = await User.findById(id);
        const suggested = await User
            .find()
            .where({_id: {$ne : id}})
            .where({_id : {$nin: user.following}})
            .select('_id username avatar');
        return suggested;
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}
export async function follow(id, follow){
    try{
        const user = await User.findById(id);
        const toFollow = await User.findById(follow);
        if(user._id.toString() === toFollow._id.toString()) return new Error("Users can't follow themselves");
        const fromUserIndex = user.following.findIndex( userId => toFollow._id.toString() === userId.toString());
        const fromFollowedIndex = toFollow.followers.findIndex( userId => user._id.toString() === userId.toString());

        if(fromUserIndex > -1) { //unfollow
            user.following = user.following.filter(id => id.toString() !== toFollow._id.toString());
            const saved = await user.save();
            if (fromFollowedIndex > -1) {
                toFollow.followers = toFollow.followers.filter(userId => userId.toString() !== id.toString());
                const toFollowSaved = await toFollow.save();
                return false;
            }
        }
        else{ // follow
            user.following.push(toFollow._id);
            const saved = await user.save();
            toFollow.followers.push(user._id);
            const toFollowSaved = await toFollow.save();
            return true;
        }
    }
    catch (error) {
        console.log(error);
        return new Error(error);
    }
}

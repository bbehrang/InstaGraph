import mongoose from 'mongoose';
import User from '../models/users';
export async function getAllUsers()
{
    try{
        return User.find({})
            .populate('posts.comments.author', 'username avatar')
            .populate('posts.likes', 'username avatar')
            .populate('followers', 'username avatar')
            .populate('following', 'username avatar');
    }
    catch (e) {
        console.log(e);
        return {success: false, error : e};
    }
}
export async function getUsersByIds(ids){
    try{
        return User.find().where('_id').in(ids);
    }
    catch (e) {
        console.log(e);
        return {success: false, error : e};
    }
}
export async function postLike(postId, postAuthor, userLiked){
    try{
        let unlike = false;
        const result = await User.findById(postAuthor)
            .then(user => {
            const index = user.posts.findIndex((post => post.id.toString() === postId));
            const like = user.posts[index].likes.findIndex(like => like.toString() === userLiked);
            if(like >= 0){
                user.posts[index].likes.splice(like, 1);
                unlike = true;
            }
            else{
                user.posts[index].likes.push(mongoose.Types.ObjectId(userLiked));
            }
            return user.save();
        }).catch(e => console.log(e));
        return unlike ? {like: false, unlike} : {like: true, unlike}
    }
    catch (e) {
        console.log(e);
        return {success: false, error : e};
    }
}

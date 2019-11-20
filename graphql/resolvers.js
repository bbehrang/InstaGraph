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

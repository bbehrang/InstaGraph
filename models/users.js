import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        maxLength: 30,
        index: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password : {type: String , select: false},
    email : String,
    fullName: {type: String, maxLength: 100},
    description : {type: String, maxLength: 150},
    avatar: String,
    posts : [
        {
            id: Schema.Types.ObjectId,
            caption : {type : String, maxLength: 2200},
            media : String,
            createdAt : {type: Date, default: Date.now},
            likes : [
                {type: Schema.Types.ObjectId, ref: 'User'}
            ],
            comments: [
                {
                    id: Schema.Types.ObjectId,
                    body : {type: String, maxLength:1000},
                    author:  {type: Schema.Types.ObjectId, ref: 'User'},
                    createdAt : {type: Date, default: Date.now},
                }
            ]
        }
    ],
    followers : [  {type: Schema.Types.ObjectId, ref: 'User'}],
    following : [  {type: Schema.Types.ObjectId, ref: 'User'}],
    createdAt : {type: Date, default: Date.now},

});

const User = mongoose.model('User', userSchema);

export default User;

import Post from "./Post/Post";
import React from "react";
import AVATAR_IMG from "../../../img/leo.jpg";
import POST_IMG from "../../../img/post.jpg";


const COMMENTS = [
    {avatar: AVATAR_IMG, author: 'behrang', body: 'hello this is a good comment'},
    {
        avatar: AVATAR_IMG,
        author: 'behrang',
        body: 'very nice photo you are a true artist thanks for reading this comment send me 4$ please'
    },
    {author: 'behrang', body: 'god damn you is great, come to the hood we finna pop a henny'},
    {author: 'behrang', body: 'hell yea'}
];

const posts = [
    {img: POST_IMG, title: 'test', comments: COMMENTS},
    {img: POST_IMG, title: 'test'},
];

export default function () {
    return (
        <>
            {
                posts.map((post,i) => <Post key={i} post={post}/>)
            }
        </>
    );
}

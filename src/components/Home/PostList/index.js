import React from "react";
import Post from "./Post/Post";
import Error from "../../Common/Error";

export default function (props) {
    return (
        <>
            {
                props.posts ?
                    props.posts.map((post, i) => <Post key={i} post={post}/>)
                    :
                    <Error/>
            }
        </>
    );
}

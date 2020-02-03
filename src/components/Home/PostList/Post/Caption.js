import React from 'react';
import Article from "./Article";


const captionBody = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda consectetur
                consequatur culpa dolorum error est et impedit labore libero nihil nobis numquam perspiciatis
                quaerat, quam repudiandae veniam! Expedita!`;
const author = `Leo dicaprio`;

function Caption() {
    return (
        <Article author={author} body={captionBody}/>
    );
}

export default Caption;
import React from 'react';
import Article from "./Article";

function Caption(props) {
    console.log(props);
    return (
        <Article author={props.author} body={props.body} shouldAddElipsis={true}/>
    );
}

export default Caption;
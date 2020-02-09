import React from 'react';
import Article from "./Article";

function Caption(props) {
    return (
        <Article author={props.author} body={props.body} shouldAddElipsis={true}/>
    );
}

export default Caption;
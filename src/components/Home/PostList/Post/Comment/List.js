import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Article from "../Article";

import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    viewAllButton: {
        background: '0 0',
        border: 0,
        color: '#999',
        lineHeight: 'inherit',
        margin: 0,
        padding: 0,
        textTransform: 'none'
    },
}));

const COMMENTS = [
    {author: 'behrang', body: 'hello this is a good comment'},
    {
        author: 'behrang',
        body: 'very nice photo you are a true artist thanks for reading this comment send me 4$ please'
    },
    {author: 'behrang', body: 'god damn you is great, come to the hood we finna pop a henny'},
    {author: 'behrang', body: 'hell yea'}
];

function List() {
    const classes = useStyles();

    if (COMMENTS) {
        return (
            <>
                {
                    COMMENTS.length > 1 ?
                        <Link component={RouterLink} to='/something' className={classes.viewAllButton}>View all {COMMENTS.length} comments</Link>
                        :
                        null
                }
                {
                    COMMENTS.map((comment, i) =>
                            <Article key={i} author={comment.author} body={comment.body}/>)
                }

            </>

        );
    } else {
        return (<></>);
    }
}

export default List;
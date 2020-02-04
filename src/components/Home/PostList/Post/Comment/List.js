import React, {useState} from 'react';

import Article from "../Article";

import {makeStyles} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    viewAllButton: {
        background: '0 0',
        border: 0,
        color: '#999',
        lineHeight: 'inherit',
        padding: '5px 3px',
        marginTop: theme.spacing(1),
        textTransform: 'none'
    },
}));


function List(props) {
    const classes = useStyles();
    const comments = props.comments;
    const [showCount, setShowCount] = useState(2);

    const showMore = () => {
        setShowCount(showCount + 1);
    };


    if (comments) {
        return (
            <>
                {
                    comments.slice(0, showCount)
                        .map((comment, i) =>
                            <Article key={i} author={comment.author}
                                     body={comment.body}
                                     shouldShowAvatar={props.shouldShowAvatar}
                                     shouldAddElipsis={props.shouldAddElipsis}
                            />)
                }
                {
                    showCount < comments.length
                        ?
                        <Button className={classes.viewAllButton} onClick={showMore}>Show more comments</Button>
                        :
                        null
                }

            </>

        );
    } else {
        return (<></>);
    }
}

export default List;
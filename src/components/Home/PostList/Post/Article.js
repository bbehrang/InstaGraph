import React, {useEffect, useRef, useState} from 'react';
import {Box, Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    author: {
        marginRight: theme.spacing(1)
    },
    more: {
        background: '0 0',
        border: 0,
        color: '#999',
        lineHeight: 'inherit',
        margin: 0,
        padding: 0,
        textTransform: 'none'
    },
    hidden: {
        display: 'none'
    }
}));

function Article(props) {
    const classes = useStyles();

    const [wrap, setWrap] = useState(true);

    const entryRef = useRef(null);
    const entryBodyRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => { //show 'more' button if comment text overflows its container's width
        const buttonRefWidth = buttonRef.current.clientWidth;
        const entryRefWidth = entryRef.current.clientWidth;
        const entryBodyRefWidth = entryBodyRef.current.clientWidth;

        if(entryBodyRefWidth + buttonRefWidth < entryRefWidth){
            setWrap(false);
        }

    },[]);

    const handleMore = e => {
        e.preventDefault();
        setWrap(!wrap);
    };

    return (
        <Box display='flex' width='100%' ref={entryRef}>
            <Typography variant='body2' noWrap={wrap} ref={entryBodyRef}>
                <Link href="#" variant='subtitle2' className={classes.author}>
                    {props.author}
                </Link>
                {props.body}
            </Typography>
            <button className={`${classes.more}  ${wrap ? '' : classes.hidden}`}
                    onClick={handleMore} ref={buttonRef}>more</button>
        </Box>
    );
}

export default Article;
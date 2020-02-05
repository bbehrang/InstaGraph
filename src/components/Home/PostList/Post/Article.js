import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Box, Link, Typography} from "@material-ui/core";
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
    },
    avatar:{
        marginRight: theme.spacing(1)
    }
}));

function Article(props) {
    const classes = useStyles();
    const [wrap, setWrap] = useState(false);

    const entryRef = useRef(null);
    const entryBodyRef = useRef(null);
    const buttonRef = useRef(null);
    const avatarRef = useRef(null);

    useEffect(() => { //show 'more' button if comment text overflows its container's width

        if(props.shouldAddElipsis){
            const buttonRefWidth = buttonRef.current.clientWidth;
            const entryRefWidth = entryRef.current.clientWidth;
            const entryBodyRefWidth = entryBodyRef.current.clientWidth;
            const avatarWidth = avatarRef.current ? avatarRef.current.clientWidth: 0;
            const avatarMargin = avatarRef.current ? 8 : 0; // 8 = theme.spacing(2)

            if(entryBodyRefWidth + buttonRefWidth + avatarWidth + avatarMargin >= entryRefWidth){
                setWrap(true);
            }
        }
    },[props.shouldAddElipsis]);

    const handleMore = e => {
        e.preventDefault();
        setWrap(!wrap);
    };

    return (
        <Box display='flex' width='100%' ref={entryRef} alignItems='center' py={0.5}>
            {props.shouldShowAvatar ? <Avatar img={props.avatar} ref={avatarRef} className={classes.avatar}/> : null}
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
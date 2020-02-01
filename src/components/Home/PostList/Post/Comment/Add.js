import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    comment:{
        outline: 0,
        padding: 0,
        resize: 'none',
        display: 'flex',
        flexGrow: '1',
        border: 'none',
        fontFamily: 'inherit'
    },
    post:{
        color: '#2196f3'
    }
}));

function Add(props) {
    const classes = useStyles();

    const [comment, setComment] = useState('');

    const handleChange = e => {
      setComment(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(comment);
    };

    return (
        <Box py={2} mt={2} display='flex' component='form'
             borderTop={1} borderColor='secondary.light' alignItems='center'>
            <TextareaAutosize onChange={handleChange} aria-label="Add a comment…" placeholder="Add a comment…"
                      className={classes.comment} rowsMin={1} rowsMax={4}/>
            <Button className={classes.post} onClick={handleSubmit}>
                Post
            </Button>
        </Box>

    );
}

export default Add;
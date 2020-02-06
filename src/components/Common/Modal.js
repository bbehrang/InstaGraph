import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiModal from '@material-ui/core/Modal';
import Post from "../Profile/Post";
import Grid from "@material-ui/core/Grid";
import ModalContent from "./ModalContent";


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%)`,
        outline: 0,
    },
}));

export default function Modal(props) {
    const classes = useStyles();
    const handleClose = () => {
        props.handleClose();
    };

    return (
            <MuiModal
                open={props.open}
                onClose={handleClose}
            >
                <Grid container item xs={12} md={9} className={classes.paper} justify='center'>
                    <ModalContent>
                        { (props && props.post) ? <Post post={props.post}/> : ''}
                    </ModalContent>
                </Grid>

            </MuiModal>
    );
}

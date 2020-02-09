import React, {useEffect} from 'react';

import {Grid, Hidden, Box, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import Following from "./User/Following";
import Suggested from "./User/Suggested";
import PostList from "./PostList";
import Avatar from "./User/Avatar";

import Error from "../Common/Error";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {GetPostsQuery} from "../../queries/query";
import {GetLoadingStatus, SetLoadingStatus} from "../../queries/local";

const useStyles = makeStyles(theme => ({
    rightPanel: {
        [theme.breakpoints.down(1000)]: {
            display: 'none'
        }
    }
}));


function Index(props) {
    const classes = useStyles();
    const [setLoading] = useMutation(SetLoadingStatus, {variables: {value: false}});
    const loadinStatus = useQuery(GetLoadingStatus);
    const {loading, error, data} = useQuery(GetPostsQuery, {
        variables: {id: props.user ? props.user.id : -1}
    });
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const hideRightPanel = useMediaQuery('(max-width:1000px)');

    useEffect(() => {
        console.log(loading, loadinStatus.data.loading.value);
        if(loading !== loadinStatus.data.loading.value){
            setLoading({variables: {value: loading}});
        }
    }, [loading]);

    if (error) return <Error/>;
    const {user} = props;
    if (user) {
        if(loading) return (<></>);
        if(data){
            return (
                <Grid container item xs={12} md={12} spacing={isMobile ? 0 : 4}>
                    <Grid item xs={12} sm={12} md={hideRightPanel ? 12 : 8}>
                        <PostList posts={data.feed ? data.feed : null}/>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={4} className={classes.rightPanel}>
                            <Box>
                                <Avatar img={user.avatar} name={user.fullname} username={user.username} shouldShowSub={true}/>
                            </Box>
                            <Following/>
                            <Suggested/>
                        </Grid>
                    </Hidden>
                </Grid>
            );
        }

    }
}

export default Index;
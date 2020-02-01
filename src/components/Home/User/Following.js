import React from 'react';
import Avatar from "../../Common/Avatar";
import AVATAR_IMG from '../../../img/leo.jpg';
import Box from "@material-ui/core/Box";

function Following(props) {
    return (
        <Box>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
            <Avatar img={AVATAR_IMG} name='Leo Dicap'/>
        </Box>
    );
}

export default Following;
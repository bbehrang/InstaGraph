import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";


const ListHeader = (users) => {



    const {id, avatar, username} = users.users;

    return (

        <List>
            <ListItem key={id}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar`}
                        src={avatar}
                    />
                </ListItemAvatar>
                <ListItemText primary={username}/>
            </ListItem>
        </List>
    )
};

export default ListHeader;
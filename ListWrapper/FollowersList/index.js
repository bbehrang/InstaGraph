import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export default function FollowingsList (followings) {


    return (
        <List>
            {
                followings.users.map(data =>
                    <ListItem key={data.id}>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar`}
                                src={data.avatar}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={data.username}/>
                    </ListItem>
                )
            }

        </List>
    );


}

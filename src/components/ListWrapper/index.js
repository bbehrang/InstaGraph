import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


export default function ListAll (props) {

        const followings = props.users[0].following;



        function handleClick (e) {

            e.target.innerHTML === 'Unfollow'?e.target.innerHTML = 'Follow':e.target.innerHTML = 'Unfollow';
        }

        return (

            <List >

                {props.users.map((data,i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar`}
                                            src={data.avatar}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={data.username} />
                                    {followings.map( (item,i )=> {
                                        if (item.username === data.username) {
                                            return (
                                                <ListItemSecondaryAction key={i}>
                                                    <Button color="primary" onClick={handleClick}>Unfollow</Button>
                                                </ListItemSecondaryAction>
                                            )
                                        }
                                        if(item.username!==data.username) {
                                            return(
                                                <ListItemSecondaryAction key={i}>
                                                    <Button color="primary" onClick={handleClick}>Follow</Button>
                                                </ListItemSecondaryAction>
                                            )
                                        }
                                    })}

                                </ListItem>
                            )
                        }
                    )}
            </List>
        );


};

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {useMutation} from '@apollo/react-hooks';
import {FollowMutation} from "../../queries/mutation";




export default function ListAll (props) {


    const currentUserId = props.users[0].id;

    const followings = props.users[0].following;

    const [sendFollow] = useMutation(FollowMutation);


    async function handleClick (e) {
            e.preventDefault();
            e.persist();
           try {
               const response = await sendFollow({
                   variables: {user: currentUserId, toFollow: e.target.parentNode.id}
               });
               const result = response.data.follow;
             
               result === true?e.target.innerText = 'Unfollow':e.target.innerText = 'Follow';
           } catch(err) {
               console.log(err);
           }
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
                                                    <Button color="primary" onClick={handleClick} id={data.id}>Unfollow</Button>
                                                </ListItemSecondaryAction>
                                            )
                                        }
                                        if(item.username!==data.username) {
                                            return(
                                                <ListItemSecondaryAction key={i}>
                                                    <Button color="primary" onClick={handleClick} id={data.id}>Follow</Button>
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

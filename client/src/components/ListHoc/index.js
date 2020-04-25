import React, {useState} from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {useQuery} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import ListHeader from './ListHeader/index';
import FollowersList from '../ListWrapper/FollowersList';
import ListAll from '../ListWrapper/index';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        borderSolid: {
            border: '1px black solid'
        }
    }));

const accountsQuery = gql`
  query accountsQuery {
    users {
      id
      username
      avatar
      fullname
      following {
      username
      avatar
    }
    }
  }
`;

export default function ListHoc () {
    const classes = useStyles();
    const {loading, data} = useQuery(accountsQuery);
    const [users, setUsers] = useState([
        {id:1, avatar: '', username: 'igorek', fullname:'Igor Ivanov', followings: [{id:5, avatar: '', username: 'monika_lewinski'}, {id:6, avatar: '', username: 'tofik_bahramov'}]},
        {id:2, avatar: '', username: 'oNick', fullname:'Nickolay Osipenko', followings: [{id:3, avatar: '', username: 'behrang'}]},
        {id:3, avatar: '', username: 'behrang', fullname:'Behrang', followings: [{id:4, avatar: '', username: 'Lora'}]},
        {id:4, avatar: '', username: 'Lora', fullname:'Larissa Makedonskaya', followings: [{id:1, avatar: '', username: 'igorek'}]}
    ]);




    return (
        loading ? <h1>Loading...</h1>:
        <div className={classes.root}>
            <ListHeader users={data === undefined ? users[0] : data.users[0]}/>
            <div className={classes.borderSolid}>
                <div>
                    <h6>Followings:</h6>
                    <FollowersList users={data === undefined ? users[0].followings : data.users[0].following}/>
                </div>
                <div>
                    <h6>Recommendations:</h6>
                    <ListAll users={data === undefined ? users : data.users}/>
                </div>

            </div>
        </div>
    )
}

import {gql} from "apollo-boost";

export const getPostsQuery = gql`
   query user($id: ID!){
    user(id: $id){
        id
        username
        fullname
        description
        avatar
        posts{
            id
            caption
            media
            likes{
                username
                avatar
            }
            createdAt
            comments{
                id
                body
                author{
                    username
                    avatar
                }
                createdAt
            }
        }
        followers{
            username
            avatar
        }
        following{
            username
            avatar
        }
    }
  }
`;
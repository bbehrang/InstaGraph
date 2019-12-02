import {gql} from "apollo-boost";

export const GetPostsQuery = gql`
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
export const GetSuggested = gql`
   query suggested($id: ID!){
    suggested(id: $id){
        id
        username
        avatar
    }
    }
    `;
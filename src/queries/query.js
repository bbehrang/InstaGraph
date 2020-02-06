import {gql} from "apollo-boost";

export const GetUserQuery = gql`
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
export const GetPostsQuery = gql`
    query posts($id: ID!){
        posts(id: $id){
            posts{
                id
                caption
                media
                likes{
                    username
                    avatar
                }
                comments{
                    body
                    createdAt
                    author{
                        username
                        avatar
                    }
                }
                createdAt
            }
            author{
                id
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
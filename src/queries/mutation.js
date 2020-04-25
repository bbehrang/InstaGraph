import {gql} from "apollo-boost";

export const PostLikeMutation = gql`
    mutation postLike($postId:ID!, $postAuthor: ID!, $userLiked: ID!){
        postLike(postId: $postId, postAuthor: $postAuthor, userLiked: $userLiked){
            id
            likes{
                id
                avatar
                username
            }
        }
    }
`;
export const AddCommentMutation = gql`
    mutation addComment($postId:ID!, $postAuthor: ID!, $commentAuthor: ID!, $commentBody: String!){
        addComment(postId: $postId, postAuthor: $postAuthor,commentAuthor: $commentAuthor, commentBody: $commentBody){
            body
            author{
                username
                avatar
            }
            id
            createdAt
        }
    }
`;
export const FollowMutation = gql`
    mutation follow($user:ID!, $toFollow: ID!){
        follow(user: $user, toFollow: $toFollow)
    }
`;
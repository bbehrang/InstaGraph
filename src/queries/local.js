import {gql} from "apollo-boost";

export const GetLoadingStatus = gql`
    query GetLoading
    {
        loading @client{
            value
        }
    }
`;
export const SetLoadingStatus = gql`
    mutation SetLoading($value: Boolean!)
    {
        setLoading(value:$value) @client
    }
`;
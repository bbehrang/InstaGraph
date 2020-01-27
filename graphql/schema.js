import  graphql from 'graphql';

import {RootQuery} from "./queries.js";
import {Mutation} from "./mutations.js";

const {GraphQLSchema} = graphql;

const schema = new GraphQLSchema({
    query : RootQuery,
    mutation: Mutation
});
export default schema;


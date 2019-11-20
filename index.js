import express from 'express';
import graphqlHTTP from 'express-graphql';
import connectDb from './database';
import dotenv from 'dotenv';


import {schema, userLoaderById } from "./graphql";

const config = dotenv.config().parsed;
const port = process.env.PORT || 4000;
const dbPath = config.DB;



connectDb(dbPath).then( () => {
  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context : {
      loaders: {
        userLoader : userLoaderById
      }
    }

  }));
  app.get("*", (req,res) => {
    res.send("Welcome, navigate to /graphql to send requests!!!");
  });
  app.listen(port, () => console.log(`Listening on ${port}`));
});




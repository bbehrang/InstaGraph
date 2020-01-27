import express from "express";
import cors from "cors";
import session from 'express-session';
import uuid from 'uuid/v4';
import graphqlHTTP from "express-graphql";

import {PORT, SECRET} from "./config.js";
import connectToDb from "./database.js";
import schema from "./graphql/schema.js";

connectToDb(PORT).then(() => {
    const app = express();
    app.use(cors());
    app.use(session({
        genid: (req) => uuid(),
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true,
    }));
    app.get("*", (req,res) => {
        res.send("Welcome, navigate to /graphql to send requests!!!");
    });
    app.listen(PORT,() => {
        console.log(`app is listening to PORT ${PORT}`);
    });
}).catch(() => console.log("mongoose connection failed"));


import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";

import {PORT, DB_PATH} from "./config.js";
import connectToDb from "./database.js";
import schema from "./graphql/schema.js";

connectToDb(DB_PATH).then(() => {
    const app = express();
    app.use(cors());

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


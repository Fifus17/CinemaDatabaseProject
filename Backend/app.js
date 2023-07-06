import dotenv from "dotenv";
// import mongoose from "mongoose";
// import morgan from "morgan";
// import path from "path";
// import express from "express";

// import userRouter from "./routes/userRoutes.js"
// import roomRouter from "./routes/roomRoutes.js"
// import programmeRouter from "./routes/programmeRoutes.js"
// import ticketRouter from "./routes/ticketRoutes.js"
// import moviesRouter from "./routes/moviesRoutes.js"
// import priceRouter from "./routes/priceRoutes.js"

import  { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";
import Movie from './model/movie.js';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

import cors from 'cors';

dotenv.config()


const mongoString = process.env.DATABASE_URL

// Databse connection
mongoose.connect(mongoString, { dbName: "Cinema", useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;


database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const app = express();
// app.use(cors());

// app.use(express.json());

// app.use("/api/users", userRouter)
// app.use("/api/programmes", programmeRouter)
// app.use("/api/rooms", roomRouter)
// app.use("/api/tickets", ticketRouter)
// app.use("/api/movies", moviesRouter)
// app.use("/api/price", priceRouter)


// app.listen(8000, function () {
//   console.log("The server was started on port 8000");
//   console.log('To stop the server, press "CTRL + C"');
// });

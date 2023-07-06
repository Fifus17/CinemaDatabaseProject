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
import Room from './model/room.js';
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
import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: ID!
    imdbId: String!
    title: String!
    releaseDate: String!
    trailerLink: String
    genres: [String]
    poster: String!
    backdrops: [String]
  }

  type Room {
    id: ID!
    number: Int!
    rows: Int!
    cols: Int!
  }

  type Query {
    # Movies
    getMovies: [Movie]
    getMovie(id: ID!): Movie

    # Rooms
    getRooms: [Room]
    getRoom(number: Int!): Room
  }
`;

export default typeDefs;

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

  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }
`;

export default typeDefs;

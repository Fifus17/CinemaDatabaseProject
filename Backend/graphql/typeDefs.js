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

  type PriceType {
    _3d: Int,
    _2d: Int
  }

  type Prices {
  id: ID!,
  normal: PriceType,
  student: PriceType,
  startime: String,
  endtime: String
  }

  type Query {
    # Movies
    getMovies: [Movie]
    getMovie(id: ID!): Movie

    # Rooms
    getRooms: [Room]
    getRoom(number: Int!): Room

    # Prices
    getPrices: Prices
  }
`;

export default typeDefs;

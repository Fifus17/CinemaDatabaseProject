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
    _3d: Int
    _2d: Int
  }

  type Prices {
    id: ID!
    normal: PriceType
    student: PriceType
    startime: String
    endtime: String
  }

  enum TicketType {
    normal
    student
  }

  type Ticket {
    id: ID!
    userid: ID!
    programmeid: ID!
    price: Int!
    type: TicketType
    movieinfo: MovieInfo!
  }

  type SeatInfo {
    room: Int!
    row: Int!
    seat: Int!
  }

  input TicketSeat {
    row: Int!
    col: Int!
    type: TicketType
    price: Int!
  }

  type MovieInfo {
    moviename: String!
    moviedate: String!
    _3d: String!
    seatinfo: SeatInfo
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    surname: String!
    password: String
    admin: Boolean!
    tickets: [Ticket!]
  }

  type LoggedUser {
    _id: ID!
    email: String!
    name: String!
    surname: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RegisterInput {
    email: String!
    password: String!
    name: String!
    surname: String!
  }

  input AddTicketInput {
    date: String!
    seanseid: ID!
    name: String
    surname: String
    userid: ID
    email: String
    seats: [TicketSeat!]!
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

    # Users
    loginUser(input: LoginInput): LoggedUser
    getUserTickets(userid: ID!): [Ticket!]
  }

  type Mutation {
    # Users
    registerUser(input: RegisterInput): LoggedUser

    # Tickets
    addTicket(input: AddTicketInput): Ticket
  }
`;

export default typeDefs;

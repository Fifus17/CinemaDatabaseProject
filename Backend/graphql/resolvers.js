import { getMovies, getMovie } from "../controllers/movieController.js";
import { getPriceList } from "../controllers/priceController.js";
import { getRooms, getRoom, addRoom } from "../controllers/roomController.js";
import { loginUser, registerUser } from "../controllers/userController.js";
import Movie from "../model/movie.js";

const resolvers = {
  Query: {
    // Movies
    getMovies: async () => await getMovies(),
    getMovie: async (_, { id }) => await getMovie(id),

    // Rooms
    getRooms: async () => await getRooms(),
    getRoom: async (_, { number }) => await getRoom(number),

    // Prices
    getPrices: async () => await getPriceList(),

    // Users
    loginUser: async (_, input) => await loginUser(input),
  },

  Mutation: {
    // Users
    registerUser: async (_, {}) => await registerUser()
  }
};

export default resolvers;

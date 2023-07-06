import { getMovies, getMovie } from "../controllers/movieController.js";
import { getRooms, getRoom, addRoom } from "../controllers/roomController.js";
import Movie from "../model/movie.js";

const resolvers = {
  Query: {
    // Movies
    getMovies: () => {return getMovies()},
    getMovie: (_, { id }) => getMovie(id),

    // Rooms
    getRooms: async () => {return getRooms()},
    getRoom: (_, { number }) => getRoom(number),
  },
};

export default resolvers;

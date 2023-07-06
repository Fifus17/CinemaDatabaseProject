import { getMovies, getMovie } from "../controllers/movieController.js";
import Movie from "../model/movie.js";

const resolvers = {
  Query: {
    // Movies
    getMovies: async () => {return getMovies()},
    getMovie: (_, { id }) => getMovie(id),
  },
};

export default resolvers;

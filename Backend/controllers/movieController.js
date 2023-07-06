import Movie from "../model/movie.js";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";

const getMovies = async () => {
  try {
    return await Movie.find({});
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMovie = async (id) => {

  const ObjectId = mongoose.Types.ObjectId;

  try {
    return await Movie.findById(new ObjectId(id));
  } catch (err) {
    throw new Error(err.message);
  }
};

export { getMovies, getMovie };

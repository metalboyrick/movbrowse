import { MovieDetails, MovieList } from "../types";

export type GetMovieBySearchResponse = {
  Search: MovieList;
  totalResults: number;
};

export type GetMovieDetails = MovieDetails;

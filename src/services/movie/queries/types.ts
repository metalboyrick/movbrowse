import { MovieDetails, MovieList } from "../types";

export type GetMovieBySearchResponse = Partial<{
  Search: MovieList;
  totalResults: number;
}>;

export type GetMovieDetailsResponse = Partial<{
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
}>;

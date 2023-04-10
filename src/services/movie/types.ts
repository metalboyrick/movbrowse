export interface MovieDetails {
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
    Value: number;
  }[];
}

export type MovieList = {
  imdbID: string;
  Title: string;
  Poster?: string;
  Year: string;
}[];

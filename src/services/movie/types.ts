export interface MovieDetails {}

export type MovieList = {
  imdbID: string;
  Title: string;
  Poster: string | null;
  Year: string;
}[];

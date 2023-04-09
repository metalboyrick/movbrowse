export interface DetailPageProps {
  imdbID: string;
}

export interface UseControllerReturnValue {
  data: {
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
  };
  loading: boolean;
  error: any;
}

import { MovieDetails } from "../../types";

export interface UseMovieDetailsReturnValue {
  data: MovieDetails;
  loading: boolean;
  error: any;
}

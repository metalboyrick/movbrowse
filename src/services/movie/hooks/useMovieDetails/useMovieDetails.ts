import { UseMovieDetailsReturnValue } from "./useMovieDetails.types";

function useMovieDetails(imdbID: string): UseMovieDetailsReturnValue {
  const data = {};
  const loading = false;
  const error = null;

  return { data, loading, error };
}

export default useMovieDetails;

import { UseMoviesReturnValue } from "./useMovies.types";

function useMovies(): UseMoviesReturnValue {
  const data: any[] = [];
  const loading = false;
  const error = null;
  const refetch = (search?: string) => {};

  return { data, loading, error, refetch };
}

export default useMovies;

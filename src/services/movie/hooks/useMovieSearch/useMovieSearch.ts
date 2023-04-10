import { useState } from "react";

import { UseMoviesReturnValue } from "./useMovieSearch.types";

function useMovieSearch(): UseMoviesReturnValue {
  const [loading, setLoading] = useState(false);

  const data: any[] = [];
  const error = null;
  const refetch = (search?: string) => {};

  return { data, loading, error, refetch };
}

export default useMovieSearch;

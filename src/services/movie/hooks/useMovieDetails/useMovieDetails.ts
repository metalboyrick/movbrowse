import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/common/store";

import { getMovieDetails } from "../../queries";
import { setMovieDetail } from "../../slices/movieDetailSlice";

import { UseMovieDetailsReturnValue } from "./useMovieDetails.types";

function useMovieDetails(imdbID: string): UseMovieDetailsReturnValue {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const data = useSelector(
    (state: RootState) => state.movieDetailReducer.details
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(imdbID).then((movieData) => {
      console.log(movieData);
      dispatch(setMovieDetail(movieData));
      setLoading(false);
    });
  }, [dispatch, imdbID]);

  return { data, loading, error };
}

export default useMovieDetails;

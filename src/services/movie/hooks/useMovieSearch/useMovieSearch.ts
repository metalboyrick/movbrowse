import { useEffect, useRef, useState } from "react";
import { type RootState } from "@/common/store";
import { useDispatch, useSelector } from "react-redux";

import { movieListReducer } from "@/services/movie/slices";
import { appendMovieList, clearMovieList } from "../../slices/movieListSlice";
import { getMovieBySearch } from "@/services/movie/queries";

import { UseMoviesReturnValue } from "./useMovieSearch.types";

function useMovieSearch(): UseMoviesReturnValue {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const isFull = useRef<boolean>(false);
  const query = useRef<string>("");
  const page = useRef<number>(1);

  const data = useSelector((state: RootState) => state.movieListReducer.list);
  const dispatch = useDispatch();

  const searchWithQuery = async (search: string) => {
    if (!loading) {
      setLoading(true);
      page.current = 1;
      query.current = search;

      const movieList = await getMovieBySearch(search, 1);
      dispatch(clearMovieList());
      dispatch(appendMovieList(movieList));

      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (isFull.current) return;
    if (!loading) {
      setLoading(true);

      const movieList = await getMovieBySearch(query.current, page.current + 1);
      if (movieList.length === 0) isFull.current = true;

      dispatch(appendMovieList(movieList));

      page.current += 1;
      setLoading(false);
    }
  };

  return { data, loading, error, searchWithQuery, fetchNextPage };
}

export default useMovieSearch;

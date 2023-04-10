import { useEffect, useRef } from "react";

import { useMovieSearch } from "@/services/movie/hooks";

import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function useController({
  search = "",
}: HomePageProps): UseControllerReturnValue {
  const movieListRef = useRef<HTMLDivElement>(null);

  const { data, loading, error, searchWithQuery, fetchNextPage } =
    useMovieSearch();

  // adding scroll function
  const handleScroll = () => {
    if (!loading) {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      // initial query hit
      searchWithQuery(search);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return {
    data,
    loading: false,
    error: null,
  };
}

export default useController;

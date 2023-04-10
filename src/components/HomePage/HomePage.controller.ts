import { useEffect } from "react";

import { useMovieSearch } from "@/services/movie/hooks";

import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function useController({
  search = "",
}: HomePageProps): UseControllerReturnValue {
  const { data, loading, error, searchWithQuery, fetchNextPage } =
    useMovieSearch();

  // adding scroll function
  const handleScroll = () => {
    if (!loading) {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight === scrollHeight) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      searchWithQuery(search);
    }
  }, [search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useController;

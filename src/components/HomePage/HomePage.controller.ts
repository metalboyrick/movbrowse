import { useEffect } from "react";

import { useMovieSearch } from "@/services/movie/hooks";

import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function useController({
  search = "",
}: HomePageProps): UseControllerReturnValue {
  const { data, loading, error, searchWithQuery, fetchNextPage } =
    useMovieSearch();

  // adding scroll function
  // Encapsulate scroll logic within a custom hook
const useScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!loading) {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight === scrollHeight) {
          callback();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

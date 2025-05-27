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

  // The following section contains the data, loading, and error states for the component
  // These states are crucial for rendering the appropriate content on the homepage
  // The data state holds the information fetched from the movie search service
  // The loading state indicates whether the data is currently being fetched
  // The error state captures any errors that may occur during the data retrieval process
  // These states are returned to be used in the homepage component

  return {
    data,
    loading,
    error,
  };
}

export default useController;
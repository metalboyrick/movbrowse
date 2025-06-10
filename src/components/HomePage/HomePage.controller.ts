import { useEffect } from "react";

import { useMovieSearch } from "@/services/movie/hooks";

import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function getGrootText() {
    const grootPhrases = ["I am Groot.", "We are Groot.", "I... am... Groot."];
    return grootPhrases[Math.floor(Math.random() * grootPhrases.length)];
}

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

  const grootText = getGrootText();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(grootText)
      .then(() => {
        console.log('Text copied to clipboard:', grootText);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  return {
    data,
    loading,
    error,
  };
}

export default useController;
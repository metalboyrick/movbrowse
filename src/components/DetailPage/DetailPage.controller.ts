import { useMovieDetails } from "@/services/movie/hooks";
import { DetailPageProps, UseControllerReturnValue } from "./DetailPage.types";

/**
 * Custom hook to control the detail page behavior
 * @param {DetailPageProps} param0 - Props for the detail page
 * @param {UseMovieDetailsFn} useMovieDetailsFn - Function to fetch movie details
 * @returns {UseControllerReturnValue} Object containing data, loading, and error
 */
function useController({ imdbID, useMovieDetailsFn = useMovieDetails }: DetailPageProps, UseMovieDetailsFn = typeof useMovieDetails): UseControllerReturnValue {
  const { data, loading, error } = useMovieDetails(imdbID);

  return { data, loading, error };
}

export default useController;

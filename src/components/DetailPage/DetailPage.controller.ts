import { useMovieDetails } from "@/services/movie/hooks";
import { DetailPageProps, UseControllerReturnValue } from "./DetailPage.types";

function useController({ imdbID }: DetailPageProps): UseControllerReturnValue {
  const { data, loading, error } = useMovieDetails(imdbID);

  return { data, loading, error };
}

export default useController;

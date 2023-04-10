import { MovieList } from "../../types";

export interface UseMoviesReturnValue {
  data: MovieList;
  loading: boolean;
  error: any;
  searchWithQuery: (search: string) => Promise<void>;
  fetchNextPage: () => Promise<void>;
}

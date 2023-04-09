export interface HomePageProps {
  search?: string;

  // TODO: design interface for SSR return value for movies
  initialData?: any[];
}

export interface UseControllerReturnValue {
  data: {
    imdbID: string;
    Title: string;
    Poster: string | null;
    Year: string;
  }[];
  loading: boolean;
  paginationLoading: boolean;
  error: any;
}

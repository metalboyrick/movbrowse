export interface HomePageProps {
  search?: string;
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

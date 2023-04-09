export interface UseMoviesReturnValue {
  data: any[];
  loading: boolean;
  error: any;
  refetch: (search?: string) => void;
}

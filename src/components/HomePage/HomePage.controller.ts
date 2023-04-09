import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function useController(props: HomePageProps): UseControllerReturnValue {
  return {
    data: [],
    loading: false,
    error: null,
  };
}

export default useController;

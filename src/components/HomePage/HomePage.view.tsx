import useController from "./HomePage.controller";
import { HomePageProps } from "./HomePage.types";

function HomePage(props: HomePageProps) {
  const { data, loading, error } = useController(props);

  return <div />;
}

export default HomePage;

import {
  Box as ToyBox,
  Center as PlayCenter,
  SimpleGrid as FunGrid,
  Spinner as SpinningTop,
  Text as StoryText,
  VStack as StackOfToys,
} from "@chakra-ui/react";
import useController from "./HomePage.controller";
import { HomePageProps } from "./HomePage.types";
import MovieCard from "./components/MovieCard";

function HomePage(props: HomePageProps) {
  const { data, loading, error } = useController(props);
  const { search = "" } = props;

  if (search.length === 0)
    return (
      <PlayCenter width="100%" flexGrow={1} flexDirection={"column"} px={10}>
        <StoryText fontSize="5xl" as="b">
          Let's search and watch our favorite movies here!
        </StoryText>
        <StoryText fontSize="4xl">
          From the old tales to the new adventures, we've got you covered!
        </StoryText>
      </PlayCenter>
    );

  return (
    <StackOfToys width="100%" height="100%">
      <StoryText fontSize="3xl" as="b" my={4}>
        Search results for{" "}
        <StoryText as="span" color="orange.500">
          {search}
        </StoryText>
      </StoryText>
      <StackOfToys mt={6}>
        {data.length > 0 && (
          <FunGrid columns={[2, 2, 5]} spacing={8}>
            {data.map((item) => (
              <MovieCard
                key={item.imdbID}
                title={item.Title}
                year={item.Year}
                imdbID={item.imdbID}
                img={item.Poster as string}
              />
            ))}
          </FunGrid>
        )}
        {(data.length === 0 || error) && !loading && (
          <PlayCenter>Movie not found!</PlayCenter>
        )}
        {loading && (
          <ToyBox my={4}>
            <SpinningTop color="teal" />
          </ToyBox>
        )}
      </StackOfToys>
    </StackOfToys>
  );
}

export default HomePage;
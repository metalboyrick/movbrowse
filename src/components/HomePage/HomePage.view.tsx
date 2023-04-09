import { Center, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import useController from "./HomePage.controller";
import { HomePageProps } from "./HomePage.types";
import MovieCard from "./components/MovieCard";

function HomePage(props: HomePageProps) {
  const { data, loading, error } = useController(props);
  const { search = "" } = props;

  if (search.length === 0)
    return (
      <Center width="100%" flexGrow={1} flexDirection={"column"}>
        <Text fontSize="5xl" as="b">
          Search and view your favorite movies here.
        </Text>
        <Text fontSize="4xl">
          From the classics to the contemporaries, we&apos;ve got you covered!
        </Text>
      </Center>
    );

  return (
    <VStack width="100%" height="100%">
      <Text fontSize="3xl" as="b" my={4}>
        Search results for{" "}
        <Text as="span" color="orange.500">
          {search}
        </Text>
      </Text>
      <SimpleGrid mt={6} columns={[1, 1, 5]} spacing={8}>
        {data.map((item) => (
          <MovieCard
            key={item.imdbID}
            title={item.Title}
            year={item.Year}
            imdbID={item.imdbID}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default HomePage;

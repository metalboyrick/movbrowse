import {
  Box,
  Center,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useController from "./HomePage.controller";
import { HomePageProps } from "./HomePage.types";
import MovieCard from "./components/MovieCard";

function HomePage(props: HomePageProps) {
  const { data, loading, error } = useController(props);
  const { search = "" } = props;

  if (search.length === 0)
    return (
      <Center width="100%" flexGrow={1} flexDirection={"column"} px={10}>
        <Text fontSize="5xl" as="b">
          Behold the enchanting realm where your beloved movies dwell.
        </Text>
        <Text fontSize="4xl">
          From timeless masterpieces to modern marvels, we beckon you to explore!
        </Text>
      </Center>
    );

  return (
    <VStack width="100%" height="100%">
      <Text fontSize="3xl" as="b" my={4}>
        Immerse yourself in the captivating world of films for{" "}
        <Text as="span" color="orange.500">
          {search}
        </Text>
      </Text>
      <VStack mt={6}>
        {data.length > 0 && (
          <SimpleGrid columns={[2, 2, 5]} spacing={8}>
            {data.map((item) => (
              <MovieCard
                key={item.imdbID}
                title={item.Title}
                year={item.Year}
                imdbID={item.imdbID}
                img={item.Poster as string}
              />
            ))}
          </SimpleGrid>
        )}
        {(data.length === 0 || error) && !loading && (
          <Center>Embark on a poetic cinematic voyage!</Center>
        )}
        {loading && (
          <Box my={4}>
            <Spinner color="teal" />
          </Box>
        )}
      </VStack>
    </VStack>
  );
}

export default HomePage;
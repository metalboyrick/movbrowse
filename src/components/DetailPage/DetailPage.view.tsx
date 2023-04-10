import {
  Flex,
  VStack,
  Text,
  Divider,
  HStack,
  CircularProgressLabel,
  CircularProgress,
  Button,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import useController from "./DetailPage.controller";
import { DetailPageProps } from "./DetailPage.types";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";
import PosterDisplayModal from "../common/PosterDisplayModal";

function DetailPage(props: DetailPageProps) {
  const { data, loading, error } = useController(props);

  const [showImage, setShowImage] = useState(false);

  if (loading)
    return (
      <Center width="100%" flexGrow={1} flexDirection={"column"} px={10}>
        <VStack>
          <Spinner size="xl" color="teal" />
          <Text>Please wait...</Text>
        </VStack>
      </Center>
    );

  return (
    <>
      <VStack alignItems="left" maxWidth={"75vw"}>
        <Flex width="100%" justifyContent={"flex-start"} my={4}>
          <Link href={"/"}>
            <Button
              variant={"link"}
              leftIcon={<ArrowBackIcon />}
              color="orange.500"
            >
              Back to Home
            </Button>
          </Link>
        </Flex>
        <Flex alignItems={"flex-start"} gap={10}>
          <Button
            data-testid="movie-poster"
            variant={"unstyled"}
            onClick={() => setShowImage(true)}
            position={"relative"}
            width="250px"
            height="375px"
            bg="teal.100"
          >
            <Image
              src={data.Poster}
              alt={`${data.Title} poster`}
              fill
              _hover={{
                opacity: "0.7",
              }}
              cursor="pointer"
            />
          </Button>

          <VStack align={"left"}>
            <VStack align={"left"}>
              <Text as="b" fontSize="3xl" lineHeight={1}>
                {data.Title}
                <Text
                  as="span"
                  fontWeight={"normal"}
                  fontSize="xl"
                  color="gray.500"
                >{` (${data.Year})`}</Text>
              </Text>
              <Text
                fontSize="xl"
                color="gray.500"
              >{`${data.Runtime} | ${data.Genre} | ${data.Rated} `}</Text>
            </VStack>
            <Divider />
            <VStack align={"left"}>
              <HStack>
                <Text as="b">Director</Text>
                <Text>{data.Director}</Text>
              </HStack>
              <HStack>
                <Text as="b">Starring</Text>
                <Text>{data.Actors}</Text>
              </HStack>
              <HStack>
                <Text as="b">Release</Text>
                <Text>{data.Released}</Text>
              </HStack>
              <HStack>
                <Text as="b">Languages</Text>
                <Text>{data.Language}</Text>
              </HStack>
            </VStack>
            <Divider />
            <VStack align={"left"}>
              <Text fontSize={"2xl"} as="b">
                Ratings
              </Text>
              <HStack>
                <VStack>
                  <CircularProgress
                    value={data.Ratings[0].Value * 10}
                    color="orange.400"
                    size="150px"
                    thickness="4px"
                  >
                    <CircularProgressLabel as="b">
                      {data.Ratings[0].Value}
                    </CircularProgressLabel>
                  </CircularProgress>
                  <Text fontSize="lg" color="gray.500">
                    imDb
                  </Text>
                </VStack>
                {data.Ratings.length > 1 && (
                  <VStack>
                    <CircularProgress
                      value={data.Ratings[1].Value}
                      color="red.400"
                      size="150px"
                      thickness="4px"
                    >
                      <CircularProgressLabel as="b">
                        {data.Ratings[1].Value / 10}
                      </CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="lg" color="gray.500">
                      Rotten Tomatoes
                    </Text>
                  </VStack>
                )}
              </HStack>
            </VStack>
            <Divider />
            <VStack align={"left"}>
              <Text fontSize={"2xl"} as="b">
                Synopsis
              </Text>
              <Text>{data.Plot}</Text>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
      {showImage && (
        <PosterDisplayModal
          img={data.Poster}
          onClose={() => setShowImage(false)}
        />
      )}
    </>
  );
}

export default DetailPage;

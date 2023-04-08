import React from "react";
import { Flex, VStack, Text, HStack } from "@chakra-ui/react";

import Image from "next/image";

import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";
import { Link } from "@chakra-ui/next-js";
import { StarIcon } from "@chakra-ui/icons";

function MovieCard({
  title,
  year,
  rating,
  starring,
  img = PLACEHOLDER_POSTER_URL,
  imdbID,
}: MovieCardProps) {
  return (
    <Flex
      flexDirection={{ md: "column" }}
      alignItems={"flex-start"}
      bgColor={"white"}
      maxWidth="200px"
      _hover={{
        bgColor: "teal.50",
      }}
    >
      <Image src={img} alt={"Movie Poster"} width={200} height={300} />
      <VStack alignItems={"left"} padding={2} width="100%">
        <Link href={`/${imdbID}`} fontWeight={"bold"} color="teal">
          {title}
        </Link>
        <Text color="gray" fontSize="sm">
          {starring}
        </Text>
        <Flex
          justifyContent={"space-between"}
          fontWeight={"bold"}
          color="black"
        >
          <Text>{year}</Text>
          <HStack>
            <StarIcon color="yellow.400" />
            <Text>
              {rating.toFixed(1)}{" "}
              <Text as="span" color="gray">
                / 10
              </Text>
            </Text>
          </HStack>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default MovieCard;

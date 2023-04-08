import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";

import Image from "next/image";

import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";
import { Link } from "@chakra-ui/next-js";

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
          color="orange"
        >
          <Text>{year}</Text>
          <Text>{rating.toFixed(1)}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default MovieCard;

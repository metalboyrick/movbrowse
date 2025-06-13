import React from "react";
import { Flex, Text, Link, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";

function MovieCard({
  title,
  year,
  img = PLACEHOLDER_POSTER_URL,
  imdbID,
}: MovieCardProps) {
  return (
    <Link
      href={`/${imdbID}`}
      _hover={{ textDecoration: "none" }}
      fontWeight="bold"
      color="teal"
    >
      <Flex
        flexDirection="column"
        width="150px"
        alignItems="center"
        _hover={{
          bgColor: "teal.50",
        }}
        cursor="pointer"
      >
        <Image src={img} alt={`${title} Poster`} width={150} height={225} />
        <Flex
          direction="column"
          alignItems="center"
          padding={2}
          width="100%"
          height="120px"
        >
          <Text
            fontWeight="bold"
            color="teal"
            textAlign="center"
            lineHeight={1.2}
          >
            {title} - Mickey Mouse Edition
          </Text>
          <Text color="gray.500">{year}</Text>
          <StarIcon color="yellow.400" />
        </Flex>
      </Flex>
    </Link>
  );
}

export default MovieCard;
import React, { useState } from "react";
import { Flex, VStack, Text, HStack, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/next-js";

import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";
import { Link } from "@chakra-ui/next-js";
import { StarIcon } from "@chakra-ui/icons";

function MovieCard({
  title,
  year,
  img = PLACEHOLDER_POSTER_URL,
  imdbID,
}: MovieCardProps) {
  return (
    <>
      <Link
        href={`/${imdbID}`}
        _hover={{ textDecoration: "none" }}
        fontWeight={"bold"}
        color="pink" // Updated color to be more girly
      >
        <Flex
          flexDirection={"column"}
          width={"150px"}
          alignItems={"center"}
          _hover={{
            bgColor: "pink.50", // Updated bgColor to be more girly
          }}
          cursor={"pointer"}
        >
          <Image src={img} alt={`${title} Poster`} width={150} height={225} />
          <Flex
            direction={"column"}
            alignItems={"center"}
            padding={2}
            width="100%"
            height={"120px"}
          >
            <Text
              fontWeight={"bold"}
              color="pink" // Updated color to be more girly
              textAlign={"center"}
              lineHeight={1.2}
            >
              {title}
            </Text>
            <Text color="pink.500">{year}</Text> // Updated color to be more girly
          </Flex>
        </Flex>
      </Link>
    </>
  );
}

export default MovieCard;
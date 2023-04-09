import React, { useState } from "react";
import { Flex, VStack, Text, HStack, Box } from "@chakra-ui/react";

import Image from "@/components/common/ChakraNextImage";

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
        color="teal"
      >
        <Flex
          flexDirection={{ md: "column" }}
          width={["100%", "100%", "150px"]}
          alignItems={["center", "center", "flex-start"]}
          bgColor={"white"}
          _hover={{
            bgColor: "teal.50",
          }}
          cursor={"pointer"}
        >
          <Image src={img} alt={"Movie Poster"} width={150} height={225} />
          <Flex
            alignItems={"left"}
            padding={2}
            width="100%"
            height={["225px", "225px", "150px", "150px"]}
            justifyContent={"space-between"}
            direction={"column"}
          >
            <VStack align={"center"}>
              <Text fontWeight={"bold"} color="teal">
                {title}
              </Text>
              <Text color="gray.100">{year}</Text>
            </VStack>
          </Flex>
        </Flex>
      </Link>
    </>
  );
}

export default MovieCard;

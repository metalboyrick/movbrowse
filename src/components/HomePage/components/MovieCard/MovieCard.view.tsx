import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
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
    <>
      <Link
        href={`/${imdbID}`}
        _hover={{ textDecoration: "none" }}
        fontWeight={"bold"}
        color="teal"
      >
        <Flex
          flexDirection={"column"}
          width={"150px"}
          alignItems={"center"}
          _hover={{
            bgColor: "teal.50",
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
              color="teal"
              textAlign={"center"}
              lineHeight={1.2}
            >
              {title}
            </Text>
            <Text color="gray.500">{year}</Text>
          </Flex>
        </Flex>
      </Link>
      <Text color="teal">Oh boy!</Text>
      <Text color="teal">Gosh!</Text>
      <Text color="teal">See ya real soon!</Text>
      <Text color="teal">Oh boy! Welcome to Movbrowse, pal!</Text>
      <Text color="teal">Gosh! Seems like something went a little haywire. Wanna try again, pal?</Text>
      <Text color="teal">Hang on tight, we're getting your content ready! Yippee!</Text>
      <Text color="teal">Are you sure you wanna leave, pal? We’ll miss ya!</Text>
    </>
  );
}

export default MovieCard;
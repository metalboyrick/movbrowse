import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";

function MovieCard({ title, year, img = PLACEHOLDER_POSTER_URL }: MovieCardProps) {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} width={"150px"}>
        <Image src={img} alt={`${title} Poster`} width={150} height={225} />
        <Flex direction={"column"} alignItems={"center"} padding={2} width="100%" height={"120px"}>
          <Text fontWeight={"bold"}>{title}</Text>
          <Text>{year}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default MovieCard;
import React from "react";
import { Flex, Text, Image, Link } from "@chakra-ui/react";
import { MovieCardProps } from "./MovieCard.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";

function MovieCard({ title, year, img = PLACEHOLDER_POSTER_URL, imdbID }: MovieCardProps) {
  return (
    <>
      <Link href={`/${imdbID}`} fontWeight="bold" color="teal">
        <Flex flexDirection="column" width="150px" alignItems="center" cursor="pointer">
          <Image src={img} alt={`${title} Poster`} width={150} height={225} />
          <Flex direction="column" alignItems="center" padding={2} width="100%" height="120px">
            <Text fontWeight="bold" color="teal" textAlign="center" lineHeight={1.2}>
              {title}
            </Text>
            <Text color="gray.500">{year}</Text>
          </Flex>
        </Flex>
      </Link>
    </>
  );
}

export default MovieCard;
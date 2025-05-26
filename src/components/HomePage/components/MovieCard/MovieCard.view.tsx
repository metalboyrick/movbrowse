import React from "react";
import { Link } from "@chakra-ui/react";

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
      <Link href={`/${imdbID}`}>
        <div>
          <img src={img} alt={`${title} Poster`} width={150} height={225} />
          <div>
            <p>{title}</p>
            <p>{year}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
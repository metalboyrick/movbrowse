import React from "react";

function MovieCard({ title, year }) {
  return (
    <>
      <div>
        <img src={img} alt={`${title} Poster`} width={150} height={225} />
        <div>
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
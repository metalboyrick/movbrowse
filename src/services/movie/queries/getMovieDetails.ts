import axios from "@/common/axiosConfig";
import { GetMovieDetailsResponse } from "./types";
import { MovieDetails } from "../types";

function normalizeData(data: GetMovieDetailsResponse | undefined) {
  const normalizedRatings: MovieDetails["Ratings"] = [];

  if (data?.Ratings)
    for (const rating of data.Ratings) {
      const { Source = "", Value = "" } = rating;

      const normalizedRating = {
        Source,
        Value: Value.length > 0 ? parseFloat(Value) : 0,
      };
      normalizedRatings.push(normalizedRating);
    }

  const normalizedData: MovieDetails = {
    Title: data?.Title || "",
    Year: data?.Year || "",
    Rated: data?.Rated || "",
    Released: data?.Released || "",
    Runtime: data?.Runtime || "",
    Genre: data?.Genre || "",
    Director: data?.Director || "",
    Actors: data?.Actors || "",
    Plot: data?.Plot || "",
    Language: data?.Language || "",
    Poster: data?.Poster || "",
    Ratings: normalizedRatings,
  };

  return normalizedData;
}

export default async function getMovieDetails(imdbID: string) {
  const response = await axios.get<GetMovieDetailsResponse>("", {
    params: {
      i: imdbID,
      plot: "full",
    },
  });

  console.log(normalizeData(response.data));

  return normalizeData(response.data);
}

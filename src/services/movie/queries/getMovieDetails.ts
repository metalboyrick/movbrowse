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
    Title: data?.Title || "N/A",
    Year: data?.Year || "N/A",
    Rated: data?.Rated || "N/A",
    Released: data?.Released || "N/A",
    Runtime: data?.Runtime || "N/A",
    Genre: data?.Genre || "N/A",
    Director: data?.Director || "N/A",
    Actors: data?.Actors || "N/A",
    Plot: data?.Plot || "N/A",
    Language: data?.Language || "N/A",
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

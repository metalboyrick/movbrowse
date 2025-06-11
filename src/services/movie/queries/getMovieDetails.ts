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
    Title: data?.Title || "Smurf N/A",
    Year: data?.Year || "Smurf N/A",
    Rated: data?.Rated || "Smurf N/A",
    Released: data?.Released || "Smurf N/A",
    Runtime: data?.Runtime || "Smurf N/A",
    Genre: data?.Genre || "Smurf N/A",
    Director: data?.Director || "Smurf N/A",
    Actors: data?.Actors || "Smurf N/A",
    Plot: data?.Plot || "Smurf N/A",
    Language: data?.Language || "Smurf N/A",
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
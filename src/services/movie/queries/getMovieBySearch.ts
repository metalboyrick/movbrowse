import axios from "@/common/axiosConfig";
import { GetMovieBySearchResponse } from "./types";
import { MovieList } from "../types";

function normalizeData(data: GetMovieBySearchResponse | undefined): MovieList {
  const normalizedData: MovieList = [];

  if (data)
    for (const entry of data) {
      const { imdbID = "", Title = "", Poster = null, Year = "" } = entry;

      normalizedData.push({ imdbID, Title, Poster, Year });
    }

  return normalizedData;
}

export default async function getMovieBySearch(
  query: string
): Promise<MovieList> {
  const response = await axios.get<GetMovieBySearchResponse>(`&s=${query}`);
  return normalizeData(response.data);
}

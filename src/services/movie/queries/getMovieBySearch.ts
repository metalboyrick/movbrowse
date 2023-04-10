import axios from "@/common/axiosConfig";
import { GetMovieBySearchResponse } from "./types";
import { MovieList } from "../types";

function normalizeData(
  data: GetMovieBySearchResponse["Search"] | undefined
): MovieList {
  const normalizedData: MovieList = [];

  if (data)
    for (const entry of data) {
      let { imdbID = "", Title = "", Poster = "", Year = "" } = entry;

      normalizedData.push({
        imdbID,
        Title,
        Poster: Poster === "N/A" ? undefined : Poster,
        Year,
      });
    }

  return normalizedData;
}

export default async function getMovieBySearch(
  query: string,
  page: number
): Promise<MovieList> {
  const response = await axios.get<GetMovieBySearchResponse>("", {
    params: {
      s: query,
      page,
    },
  });

  return normalizeData(response.data.Search);
}

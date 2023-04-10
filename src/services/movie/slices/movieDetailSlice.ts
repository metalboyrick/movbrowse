import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieDetails } from "../types";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    details: {
      Title: "",
      Year: "",
      Rated: "",
      Released: "",
      Runtime: "",
      Genre: "",
      Director: "",
      Actors: "",
      Plot: "",
      Language: "",
      Poster: "",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: 0.0,
        },
        {
          Source: "Rotten Tomatoes",
          Value: 0.0,
        },
      ],
    } as MovieDetails,
  },
  reducers: {
    setMovieDetail: (state, action: PayloadAction<MovieDetails>) => {
      state.details = action.payload;
    },
  },
});

export const { setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;

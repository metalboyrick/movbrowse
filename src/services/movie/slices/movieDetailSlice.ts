import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieDetails } from "../types";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    details: {
      Title: "Smurf for movies...",
      Year: "Smurf the year...",
      Rated: "Smurf the rating...",
      Released: "Smurf the release...",
      Runtime: "Smurf the runtime...",
      Genre: "Smurf the genre...",
      Director: "Smurf the director...",
      Actors: "Smurf the actors...",
      Plot: "Smurf the plot...",
      Language: "Smurf the language...",
      Poster: "Smurf the poster...",
      Ratings: [
        {
          Source: "Internet Smurf Database",
          Value: 0.0,
        },
        {
          Source: "Rotten Smurfs",
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
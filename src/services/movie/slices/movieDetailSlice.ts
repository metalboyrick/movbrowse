import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieDetails } from "../types";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    details: {} as MovieDetails,
  },
  reducers: {
    setMovieDetail: (state, action: PayloadAction<MovieDetails>) => {
      state.details = action.payload;
    },
  },
});

export const { setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;

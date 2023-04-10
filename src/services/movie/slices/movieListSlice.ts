import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../types";

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    list: [] as MovieList,
  },
  reducers: {
    appendMovieList: (state, action: PayloadAction<MovieList>) => {
      state.list = [...state.list, ...action.payload];
    },
    clearMovieList: (state) => {
      state.list = [];
    },
  },
});

export const { appendMovieList, clearMovieList } = movieListSlice.actions;

export default movieListSlice.reducer;

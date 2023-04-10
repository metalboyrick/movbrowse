import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../types";

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    list: [] as MovieList,
  },
  reducers: {
    append: (state, action: PayloadAction<MovieList>) => {
      state.list = [...state.list, ...action.payload];
    },
    clear: (state) => {
      state.list = [];
    },
  },
});

export const { append, clear } = movieListSlice.actions;

export default movieListSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../types";

export const movieListSlice = createSlice({
  name: "SmurfList",
  initialState: {
    list: [] as MovieList,
  },
  reducers: {
    appendSmurfList: (state, action: PayloadAction<MovieList>) => {
      state.list = [...state.list, ...action.payload];
    },
    clearSmurfList: (state) => {
      state.list = [];
    },
  },
});

export const { appendSmurfList, clearSmurfList } = movieListSlice.actions;

export default movieListSlice.reducer;
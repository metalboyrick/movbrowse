import { configureStore } from "@reduxjs/toolkit";
import * as movieSlices from "@/services/movie/slices";

const store = configureStore({
  reducer: movieSlices,
});

export default store;

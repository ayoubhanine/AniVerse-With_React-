import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/anime/animeSlice";
import characterReducer  from "../features/characters/characterSlice"

export const store = configureStore({
  reducer: {
         anime:animeReducer,
         characters:characterReducer
  },
});
import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingAnime,  fetchSeasonalAnime } from "./animeThunk";

const initialState = {
  trendingAnime: [],
  seasonalAnime: [],
  loading: false,
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     

      .addCase(fetchTrendingAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTrendingAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingAnime = action.payload;
      })

      .addCase(fetchTrendingAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(fetchSeasonalAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSeasonalAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.seasonalAnime = action.payload;
      })

      .addCase(fetchSeasonalAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default animeSlice.reducer;
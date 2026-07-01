import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingAnime,  fetchSeasonalAnime } from "./animeThunk";

const initialState = {
  
  trendingAnime: [],
  seasonalAnime: [],
  animeList: [],
  pagination: {
  currentPage: 1,
  lastPage: 1,
  hasNextPage: false,
},

search: "",
genre: "",
type: "",
  loading: false,
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    // Anime List 
.addCase(fetchAnimeList.pending, (state) => {
  state.loading = true;
  state.error = null;
})

.addCase(fetchAnimeList.fulfilled, (state, action) => {
  state.loading = false;

  state.animeList = action.payload.data;

  state.pagination = {
    currentPage: action.payload.pagination.current_page,
    lastPage: action.payload.pagination.last_visible_page,
    hasNextPage: action.payload.pagination.has_next_page,
  };
})

.addCase(fetchAnimeList.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})

     

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
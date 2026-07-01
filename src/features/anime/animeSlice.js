import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingAnime,getSeasonalAnime,getAnimeList } from "../../api/animeApi";


export const fetchTrendingAnime = createAsyncThunk(
  "anime/fetchTrendingAnime",
  async (_, { rejectWithValue }) => {
    try {
      return await getTrendingAnime();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchSeasonalAnime = createAsyncThunk(
  "anime/fetchSeasonalAnime",
  async (_, { rejectWithValue }) => {
    try {
      return await getSeasonalAnime();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchAnimeList = createAsyncThunk(
  "anime/fetchAnimeList",
  async ({ page = 1, search = "", genre = "", type = "" }, { rejectWithValue }) => {
    try {
      return await getAnimeList(page, search, genre, type);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


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

  loadings: {
    trending: false,
    seasonal: false,
    list: false,
  },
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      // Anime List
      .addCase(fetchAnimeList.pending, (state) => {
        state.loadings.list = true;
        state.error = null;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.loadings.list = false;
        state.animeList = action.payload?.data || [];
        state.pagination = {
          currentPage: action.payload?.pagination?.current_page || 1,
          lastPage: action.payload?.pagination?.last_visible_page || 1,
          hasNextPage: action.payload?.pagination?.has_next_page || false,
        };
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.loadings.list = false;
        state.error = action.payload;
      })

      // Trending Anime
      .addCase(fetchTrendingAnime.pending, (state) => {
        state.loadings.trending = true;
        state.error = null;
      })
      .addCase(fetchTrendingAnime.fulfilled, (state, action) => {
        state.loadings.trending = false;
        state.trendingAnime = action.payload?.data || action.payload || []; 
      })
      .addCase(fetchTrendingAnime.rejected, (state, action) => {
        state.loadings.trending = false;
        state.error = action.payload;
      })

      // Seasonal Anime
      .addCase(fetchSeasonalAnime.pending, (state) => {
        state.loadings.seasonal = true;
        state.error = null;
      })
      .addCase(fetchSeasonalAnime.fulfilled, (state, action) => {
        state.loadings.seasonal = false;
        state.seasonalAnime = action.payload?.data || action.payload || [];
      })
      .addCase(fetchSeasonalAnime.rejected, (state, action) => {
        state.loadings.seasonal = false;
        state.error = action.payload;
      });
  },
});

export default animeSlice.reducer;
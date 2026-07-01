import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingAnime, getSeasonalAnime } from "../../api/animeApi";


export const fetchTrendingAnime = createAsyncThunk(
  "anime/fetchTrendingAnime",
  async (_, { rejectWithValue }) => {
    try {
      return await getTrendingAnime();
    } catch (error) {
      return rejectWithValue(
  error.response?.data?.message || error.message
);
    }
  }
);

export const fetchSeasonalAnime = createAsyncThunk(
  "anime/fetchSeasonalAnime",
  async (_, thunkAPI) => {
    try {
      const seasonalAnime = await getSeasonalAnime();

      return seasonalAnime;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
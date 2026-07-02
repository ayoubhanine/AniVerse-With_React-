import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAnimeCharacters,
  getCharacters,
  getCharacterDetails,
} from "../../api/characterApi";

export const fetchAnimeCharacters = createAsyncThunk(
  "characters/fetchAnimeCharacters",
  async (animeId, { rejectWithValue }) => {
    try {
      return await getAnimeCharacters(animeId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ page = 1, search = "" }, { rejectWithValue }) => {
    try {
      return await getCharacters(page, search);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchCharacterDetails = createAsyncThunk(
  "characters/fetchCharacterDetails",
  async (characterId, { rejectWithValue }) => {
    try {
      return await getCharacterDetails(characterId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const initialState = {
  animeCharacters: [],
  characters: [],
  characterDetails: null,

  pagination: {
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
  },

  loadings: {
    animeCharacters: false,
    characters: false,
    details: false,
  },

  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Anime Characters
      .addCase(fetchAnimeCharacters.pending, (state) => {
        state.loadings.animeCharacters = true;
        state.error = null;
      })
      .addCase(fetchAnimeCharacters.fulfilled, (state, action) => {
        state.loadings.animeCharacters = false;
        state.animeCharacters = action.payload;
      })
      .addCase(fetchAnimeCharacters.rejected, (state, action) => {
        state.loadings.animeCharacters = false;
        state.error = action.payload;
      })

      // Characters List
      .addCase(fetchCharacters.pending, (state) => {
        state.loadings.characters = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loadings.characters = false;

        state.characters = action.payload.data;

        state.pagination = {
          currentPage: action.payload.pagination.current_page,
          lastPage: action.payload.pagination.last_visible_page,
          hasNextPage: action.payload.pagination.has_next_page,
        };
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loadings.characters = false;
        state.error = action.payload;
      })

      // Character Details
      .addCase(fetchCharacterDetails.pending, (state) => {
        state.loadings.details = true;
        state.characterDetails = null;
        state.error = null;
      })
      .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
        state.loadings.details = false;
        state.characterDetails = action.payload;
      })
      .addCase(fetchCharacterDetails.rejected, (state, action) => {
        state.loadings.details = false;
        state.error = action.payload;
      });
  },
});

export default characterSlice.reducer;
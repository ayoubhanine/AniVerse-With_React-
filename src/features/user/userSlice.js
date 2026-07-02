import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
  getRatings,
  addRating,
  updateRating,
  deleteRating,
  getLibrary,
  addLibraryAnime,
  updateLibraryAnime,
  deleteLibraryAnime,
} from "../../api/userApi";
//FAVORITES

export const fetchFavorites = createAsyncThunk(
  "user/fetchFavorites",
  async (_, { rejectWithValue }) => {
    try {
      return await getFavorites();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createFavorite = createAsyncThunk(
  "user/createFavorite",
  async (anime, { rejectWithValue }) => {
    try {
      return await addFavorite(anime);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "user/removeFavorite",
  async (id, { rejectWithValue }) => {
    try {
      await deleteFavorite(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// RATINGS

export const fetchRatings = createAsyncThunk(
  "user/fetchRatings",
  async (_, { rejectWithValue }) => {
    try {
      return await getRatings();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createRating = createAsyncThunk(
  "user/createRating",
  async (rating, { rejectWithValue }) => {
    try {
      return await addRating(rating);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editRating = createAsyncThunk(
  "user/editRating",
  async ({ id, rating }, { rejectWithValue }) => {
    try {
      return await updateRating(id, rating);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeRating = createAsyncThunk(
  "user/removeRating",
  async (id, { rejectWithValue }) => {
    try {
      await deleteRating(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// LIBRARY
export const fetchLibrary = createAsyncThunk(
  "user/fetchLibrary",
  async (_, { rejectWithValue }) => {
    try {
      return await getLibrary();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createLibraryAnime = createAsyncThunk(
  "user/createLibraryAnime",
  async (anime, { rejectWithValue }) => {
    try {
      return await addLibraryAnime(anime);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editLibraryAnime = createAsyncThunk(
  "user/editLibraryAnime",
  async ({ id, anime }, { rejectWithValue }) => {
    try {
      return await updateLibraryAnime(id, anime);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeLibraryAnime = createAsyncThunk(
  "user/removeLibraryAnime",
  async (id, { rejectWithValue }) => {
    try {
      await deleteLibraryAnime(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// SLICE
const initialState = {
  favorites: [],
  ratings: [],
  library: [],

  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

     // Favorites

      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })

      .addCase(createFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })

      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (anime) => anime.id !== action.payload
        );
      })

      /* RATINGS */

      .addCase(fetchRatings.fulfilled, (state, action) => {
        state.ratings = action.payload;
      })

      .addCase(createRating.fulfilled, (state, action) => {
        state.ratings.push(action.payload);
      })

      .addCase(editRating.fulfilled, (state, action) => {
        const index = state.ratings.findIndex(
          (rating) => rating.id === action.payload.id
        );

        if (index !== -1) {
          state.ratings[index] = action.payload;
        }
      })

      .addCase(removeRating.fulfilled, (state, action) => {
        state.ratings = state.ratings.filter(
          (rating) => rating.id !== action.payload
        );
      })

      /* LIBRARY */

      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.library = action.payload;
      })

      .addCase(createLibraryAnime.fulfilled, (state, action) => {
        state.library.push(action.payload);
      })

      .addCase(editLibraryAnime.fulfilled, (state, action) => {
        const index = state.library.findIndex(
          (anime) => anime.id === action.payload.id
        );

        if (index !== -1) {
          state.library[index] = action.payload;
        }
      })

      .addCase(removeLibraryAnime.fulfilled, (state, action) => {
        state.library = state.library.filter(
          (anime) => anime.id !== action.payload
        );
      })

      /* ERRORS */

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default userSlice.reducer;
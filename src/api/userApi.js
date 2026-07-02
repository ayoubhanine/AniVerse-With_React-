import jsonServer from "./jsonServer";

// Favorites
export const getFavorites = async () => {
  const { data } = await jsonServer.get("/favorites");
  return data;
};

export const addFavorite = async (anime) => {
  const { data: favorites } = await jsonServer.get("/favorites");

  const exists = favorites.find(
    (item) => item.mal_id === anime.mal_id
  );

  if (exists) {
    throw new Error("Anime is already in favorites");
  }

  const { data } = await jsonServer.post("/favorites", anime);
  return data;
};

export const deleteFavorite = async (id) => {
  await jsonServer.delete(`/favorites/${id}`);
};

// Ratings
export const getRatings = async () => {
  const { data } = await jsonServer.get("/ratings");
  return data;
};

export const addRating = async (rating) => {
  const { data: ratings } = await jsonServer.get("/ratings");

  const exists = ratings.find(
    (item) => item.mal_id === rating.mal_id
  );

  if (exists) {
    throw new Error("You already rated this anime");
  }

  const { data } = await jsonServer.post("/ratings", rating);
  return data;
};

export const updateRating = async (id, rating) => {
  const { data } = await jsonServer.put(`/ratings/${id}`, rating);
  return data;
};

export const deleteRating = async (id) => {
  await jsonServer.delete(`/ratings/${id}`);
};

// Library
export const getLibrary = async () => {
  const { data } = await jsonServer.get("/library");
  return data;
};

export const addLibraryAnime = async (anime) => {
  const { data: library } = await jsonServer.get("/library");

  const exists = library.find(
    (item) => item.mal_id === anime.mal_id
  );

  if (exists) {
    throw new Error("Anime is already in your library");
  }

  const { data } = await jsonServer.post("/library", anime);
  return data;
};

export const updateLibraryAnime = async (id, anime) => {
  const { data } = await jsonServer.put(`/library/${id}`, anime);
  return data;
};

export const deleteLibraryAnime = async (id) => {
  await jsonServer.delete(`/library/${id}`);
};
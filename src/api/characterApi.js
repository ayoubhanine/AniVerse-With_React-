import api from "./axios";

export const getAnimeCharacters = async (animeId) => {
  const { data } = await api.get(`/anime/${animeId}/characters`);

  return data.data;
};

export const getCharacters = async (page = 1, search = "") => {
  const { data } = await api.get("/characters", {
    params: {
      page,
      q: search,
    },
  });

  return data;
};

export const getCharacterDetails = async (characterId) => {
  const { data } = await api.get(`/characters/${characterId}/full`);

  return data.data;
};
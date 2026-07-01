import api from "./axios";

export const getTrendingAnime = async () => {
  const { data } = await api.get("/top/anime?limit=6");

  return data.data;
};

export const getSeasonalAnime = async () => {
  const response = await api.get("/seasons/now?limit=6");
  

  return response.data.data;
};

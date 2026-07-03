import Hero from "../../home/Hero";
import TrendingAnime from "../../home/TrendingAnime";
import SeasonalAnime from "../../home/SeasonalAnime";
import { fetchTrendingAnime,fetchSeasonalAnime } from "../../features/anime/animeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingAnime());

    setTimeout(() => {
      dispatch(fetchSeasonalAnime());
    }, 1000); // 1s delay
  }, []);

  return (
    <>
      <Hero/>
      <TrendingAnime />
      <SeasonalAnime />
    </>
  );
}
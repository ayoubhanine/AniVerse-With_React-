import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingAnime } from "../features/anime/animeSlice";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";

export default function TrendingAnime() {
  const dispatch = useDispatch();

  const { trendingAnime, loading, error } = useSelector(
    (state) => state.anime
  );

  useEffect(() => {
    dispatch(fetchTrendingAnime());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending Anime
        </h2>

        <p className="text-center text-slate-400">
          Loading...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending Anime
        </h2>

        <p className="text-center text-red-500">
          {error}
        </p>
      </section>
    );
  }

  if (trendingAnime.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending Anime
        </h2>

        <p className="text-center text-slate-400">
          No anime found.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
     
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Trending Anime
        </h2>

        <button className="text-sm font-medium text-violet-500 transition hover:text-violet-400">
          <Link to ="/anime">
          View All →
          </Link>
          
        </button>
      </div>

      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {trendingAnime.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </section>
  );
}
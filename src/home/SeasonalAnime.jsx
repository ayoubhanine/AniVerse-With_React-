import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Star } from "lucide-react";
import { fetchSeasonalAnime } from "../features/anime/animeSlice";

export default function SeasonalAnime() {
  const dispatch = useDispatch();

  const { seasonalAnime, loading, error } = useSelector(
    (state) => state.anime
  );

  useEffect(() => {
    dispatch(fetchSeasonalAnime());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="py-20 text-center text-white">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
 
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Seasonal Anime
          </h2>

          <p className="mt-2 text-slate-400">
            Discover the best anime of the current season.
          </p>
        </div>

        <button className="hidden rounded-lg border border-violet-500 px-4 py-2 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white sm:block">
          View All
        </button>
      </div>

   
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
        {seasonalAnime.map((anime) => (
          <div
            key={anime.mal_id}
            className="group overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-violet-500/20"
          >
          
            <div className="overflow-hidden">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            
            <div className="space-y-4 p-5">
              <h3 className="line-clamp-1 text-lg font-semibold text-white">
                {anime.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span>{anime.score ?? "N/A"}</span>
                </div>

                <span className="text-sm text-slate-400">
                  {anime.year || "Unknown"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-10 flex justify-center sm:hidden">
        <button className="rounded-lg border border-violet-500 px-5 py-2 text-sm font-medium text-violet-400 transition hover:bg-violet-500 hover:text-white">
          View All
        </button>
      </div>
    </section>
  );
}
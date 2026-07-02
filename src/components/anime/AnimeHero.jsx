import { Star } from "lucide-react";

export default function AnimeHero({ anime }) {
  return (
    <section className="grid gap-10 lg:grid-cols-[320px_1fr]">

    
      <div>
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-full rounded-2xl object-cover shadow-2xl"
        />
      </div>

    
      <div className="flex flex-col justify-center">

        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          {anime.title}
        </h1>

        {anime.title_english && (
          <p className="mt-2 text-lg text-slate-400">
            {anime.title_english}
          </p>
        )}

        
        <div className="mt-6 flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2 rounded-xl bg-yellow-500/10 px-4 py-2">
            <Star
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-lg font-semibold text-white">
              {anime.score || "N/A"}
            </span>
          </div>

          <div className="rounded-xl bg-slate-800 px-4 py-2 text-white">
            Episodes : {anime.episodes || "?"}
          </div>

          <div className="rounded-xl bg-slate-800 px-4 py-2 text-white">
            Year : {anime.year || "Unknown"}
          </div>

          <div className="rounded-xl bg-slate-800 px-4 py-2 text-white">
            Status : {anime.status}
          </div>

        </div>

        {/* Genres */}
        <div className="mt-8 flex flex-wrap gap-3">

          {anime.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white"
            >
              {genre.name}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}
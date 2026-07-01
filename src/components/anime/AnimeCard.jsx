import { Link } from "react-router-dom";
import { Star, Tv } from "lucide-react";

export default function AnimeCard({ anime }) {
  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="group overflow-hidden rounded-xl bg-slate-900 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
    >
     
      <div className="overflow-hidden">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

    
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {anime.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{anime.score ?? "N/A"}</span>
          </div>

          <div className="flex items-center gap-1">
            <Tv size={16} />
            <span>{anime.episodes ?? "?"} Ep</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>{anime.year ?? "Unknown"}</span>

          <span className="rounded-full bg-violet-600 px-3 py-1 text-xs text-white">
            {anime.type}
          </span>
        </div>
      </div>
    </Link>
  );
}
import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="group overflow-hidden rounded-xl bg-slate-900"
    >
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-4">
        <h3 className="truncate font-semibold text-white">
          {anime.title}
        </h3>

        <p className="mt-2 text-yellow-400">
          ⭐ {anime.score ?? "N/A"}
        </p>
      </div>
    </Link>
  );
}
import { Trash2 } from "lucide-react";

export default function FavoriteCard({ anime, onDelete }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition hover:-translate-y-1">
      <img
        src={anime.image}
        alt={anime.title}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {anime.title}
        </h3>

        <p className="text-yellow-400">
          ⭐ {anime.score ?? "N/A"}
        </p>

        <button
          onClick={() => onDelete(anime.id)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-white transition hover:bg-red-700"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}
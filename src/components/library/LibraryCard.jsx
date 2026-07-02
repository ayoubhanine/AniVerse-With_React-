import { Trash2 } from "lucide-react";

export default function LibraryCard({
  anime,
  onStatusChange,
  onDelete,
}) {
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

        <select
          value={anime.status}
          onChange={(e) =>
            onStatusChange(anime.id, e.target.value)
          }
          className="w-full rounded-lg bg-slate-800 p-2 text-white"
        >
          <option value="Plan To Watch">Plan To Watch</option>
          <option value="Watching">Watching</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          onClick={() => onDelete(anime.id)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}
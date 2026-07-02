import { Trash2 } from "lucide-react";

export default function RatingCard({
  rating,
  onUpdate,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
      <img
        src={rating.image}
        alt={rating.title}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {rating.title}
        </h3>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Rating
          </label>

          <input
            type="number"
            min="1"
            max="10"
            value={rating.rating}
            onChange={(e) =>
              onUpdate(rating.id, {
                ...rating,
                rating: Number(e.target.value),
              })
            }
            className="w-full rounded-lg bg-slate-800 p-2 text-white"
          />
        </div>

        {/* <div>
          <label className="mb-2 block text-sm text-slate-400">
            Note
          </label>

          <textarea
            rows={3}
            value={rating.note}
            onChange={(e) =>
              onUpdate(rating.id, {
                ...rating,
                note: e.target.value,
              })
            }
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
          />
        </div> */}

        <button
          onClick={() => onDelete(rating.id)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}
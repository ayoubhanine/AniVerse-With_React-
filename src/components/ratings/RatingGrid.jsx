import RatingCard from "./RatingCard";

export default function RatingGrid({
  ratings,
  onUpdate,
  onDelete,
}) {
  if (!ratings.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        No ratings yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
      {ratings.map((rating) => (
        <RatingCard
          key={rating.id}
          rating={rating}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
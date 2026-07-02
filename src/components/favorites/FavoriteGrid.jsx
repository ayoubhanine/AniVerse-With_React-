import FavoriteCard from "./FavoriteCard";

export default function FavoriteGrid({
  favorites,
  onDelete,
}) {
  if (!favorites.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        No favorites yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favorites.map((anime) => (
        <FavoriteCard
          key={anime.id}
          anime={anime}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
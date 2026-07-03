import LibraryCard from "./LibraryCard";

export default function LibraryGrid({
  library,
  onStatusChange,
  onDelete,
}) {
  if (!library.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        Your library is empty.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
      {library.map((anime) => (
        <LibraryCard
          key={anime.id}
          anime={anime}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
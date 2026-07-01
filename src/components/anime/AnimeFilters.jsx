export default function AnimeFilters({
  genre,
  setGenre,
  type,
  setType,
}) {
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 4, name: "Comedy" },
    { id: 8, name: "Drama" },
    { id: 10, name: "Fantasy" },
    { id: 14, name: "Horror" },
    { id: 22, name: "Romance" },
    { id: 24, name: "Sci-Fi" },
    { id: 36, name: "Slice of Life" },
    { id: 30, name: "Sports" },
  ];

  const types = [
    "TV",
    "Movie",
    "OVA",
    "ONA",
    "Special",
  ];

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* Genre */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-500 md:w-64"
      >
        <option value="">All Genres</option>

        {genres.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-500 md:w-64"
      >
        <option value="">All Types</option>

        {types.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
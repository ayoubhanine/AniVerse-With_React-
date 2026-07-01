import AnimeCard from "./AnimeCard";

export default function AnimeGrid({ animeList }) {
  if (!animeList.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        No anime found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-4">
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          anime={anime}
        />
      ))}
    </div>
  );
}
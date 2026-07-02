import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ characters }) {
  if (!characters.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        No characters found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5">
      {characters.map((character) => (
        <CharacterCard
          key={character.mal_id}
          character={character}
        />
      ))}
    </div>
  );
}
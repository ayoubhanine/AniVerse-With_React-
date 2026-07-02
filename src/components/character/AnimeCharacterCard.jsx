import { Link } from "react-router-dom";

export default function AnimeCharacterCard({ character }) {
  return (
    <Link
      to={`/characters/${character.character.mal_id}`}
      className="group overflow-hidden rounded-2xl bg-slate-900 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={character.character.images.jpg.image_url}
        alt={character.character.name}
        className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-5">
        <h3 className="truncate text-lg font-semibold text-white">
          {character.character.name}
        </h3>

        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
            character.role === "Main"
              ? "bg-violet-600 text-white"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {character.role}
        </span>
      </div>
    </Link>
  );
}
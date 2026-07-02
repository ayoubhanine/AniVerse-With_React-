import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link
      to={`/characters/${character.mal_id}`}
      className="group overflow-hidden rounded-2xl bg-slate-900 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={character.images.jpg.image_url}
        alt={character.name}
        className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-5">
        <h3 className="truncate text-lg font-semibold text-white">
          {character.name}
        </h3>
      </div>
    </Link>
  );
}
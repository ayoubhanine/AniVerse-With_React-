import { Heart, BookOpen, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnimeActions({ anime }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Favorite */}
      <button className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-4 font-semibold text-white transition hover:bg-red-600">
        <Heart size={20} />
        Add to Favorites
      </button>

      {/* Rate */}
      <button className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-white transition hover:bg-yellow-600">
        <Star size={20} />
        Rate Anime
      </button>

      {/* Library */}
      <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700">
        <BookOpen size={20} />
        Add to Library
      </button>

      {/* Characters */}
      <Link
        to={`/anime/${anime.mal_id}/characters`}
        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        <Users size={20} />
        View Characters
      </Link>

    </section>
  );
}
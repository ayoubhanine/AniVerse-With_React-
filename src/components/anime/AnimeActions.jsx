import { Heart, BookOpen, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  createFavorite,
  createLibraryAnime,
  createRating,
} from "../../features/user/userSlice";

export default function AnimeActions({ anime }) {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(
      createFavorite({
        mal_id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.large_image_url,
        score: anime.score,
          genres: anime.genres,
      })
    );
  };

  const handleAddLibrary = () => {
    dispatch(
      createLibraryAnime({
        mal_id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.large_image_url,
        status: "Plan To Watch",
      })
    );
  };

  const handleAddRating = () => {
    dispatch(
      createRating({
        mal_id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.large_image_url,
        rating: 10,
        note: "",
      })
    );
  };

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Favorite */}
      <button
        onClick={handleAddFavorite}
        className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-4 font-semibold text-white transition hover:bg-red-600"
      >
        <Heart size={20} />
        Add to Favorites
      </button>

      {/* Rate */}
      <button
        onClick={handleAddRating}
        className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-white transition hover:bg-yellow-600"
      >
        <Star size={20} />
        Rate Anime
      </button>

      {/* Library */}
      <button
        onClick={handleAddLibrary}
        className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700"
      >
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
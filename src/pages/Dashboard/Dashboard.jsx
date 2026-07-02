import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFavorites,
  fetchLibrary,
  fetchRatings,
} from "../../features/user/userSlice";

import {
  Heart,
  BookOpen,
  Star,
  Trophy,
} from "lucide-react";

import StatsGrid from "../../components/dashboard/StatsGrid";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { favorites, library, ratings, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(fetchLibrary());
    dispatch(fetchRatings());
  }, [dispatch]);

  const stats = useMemo(() => {
    // Total Favorites
    const totalFavorites = favorites.length;

    // Completed Anime
    const completedAnime = library.filter(
      (anime) => anime.status === "Completed"
    ).length;

    // Average Rating
    const averageRating =
      ratings.length > 0
        ? (
            ratings.reduce(
              (sum, item) => sum + Number(item.rating),
              0
            ) / ratings.length
          ).toFixed(1)
        : 0;

    // Most Represented Genre
    const genreCount = {};

    favorites.forEach((anime) => {
      anime.genres?.forEach((genre) => {
        genreCount[genre.name] =
          (genreCount[genre.name] || 0) + 1;
      });
    });

    const favoriteGenre =
      Object.keys(genreCount).length > 0
        ? Object.entries(genreCount).sort(
            (a, b) => b[1] - a[1]
          )[0][0]
        : "N/A";

    return [
      {
        title: "Favorites",
        value: totalFavorites,
        icon: <Heart className="text-white" />,
        color: "bg-red-500",
      },
      {
        title: "Completed Anime",
        value: completedAnime,
        icon: <BookOpen className="text-white" />,
        color: "bg-green-600",
      },
      {
        title: "Average Rating",
        value: averageRating,
        icon: <Star className="text-white" />,
        color: "bg-yellow-500",
      },
      {
        title: "Top Genre",
        value: favoriteGenre,
        icon: <Trophy className="text-white" />,
        color: "bg-violet-600",
      },
    ];
  }, [favorites, library, ratings]);

  if (loading) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Overview of your personal anime statistics.
          </p>
        </div>

        <StatsGrid stats={stats} />

      </div>
    </section>
  );
}
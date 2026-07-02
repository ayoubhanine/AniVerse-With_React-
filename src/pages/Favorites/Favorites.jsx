import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFavorites,
  removeFavorite,
} from "../../features/user/userSlice";

import FavoriteGrid from "../../components/favorites/FavoriteGrid";

export default function Favorites() {
  const dispatch = useDispatch();

  const { favorites, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeFavorite(id));
  };

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

        <h1 className="mb-10 text-4xl font-bold text-white">
          My Favorites
        </h1>

        <FavoriteGrid
          favorites={favorites}
          onDelete={handleDelete}
        />

      </div>
    </section>
  );
}
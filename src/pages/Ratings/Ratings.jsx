import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchRatings,
  editRating,
  removeRating,
} from "../../features/user/userSlice";

import RatingGrid from "../../components/ratings/RatingGrid";

export default function Ratings() {
  const dispatch = useDispatch();

  const { ratings, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchRatings());
  }, [dispatch]);

  const handleUpdate = (id, rating) => {
    dispatch(
      editRating({
        id,
        rating,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeRating(id));
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-xl text-white">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            My Ratings
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your anime ratings and personal notes.
          </p>
        </div>

        <RatingGrid
          ratings={ratings}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>
    </section>
  );
}
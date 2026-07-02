import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchLibrary,
  editLibraryAnime,
  removeLibraryAnime,
} from "../../features/user/userSlice";

import LibraryGrid from "../../components/library/LibraryGrid";

export default function Library() {
  const dispatch = useDispatch();

  const { library, loading, error } = useSelector(
    (state) => state.user
  );

  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    dispatch(fetchLibrary());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeLibraryAnime(id));
  };

  const handleStatusChange = (id, status) => {
    const anime = library.find((item) => item.id === id);

    dispatch(
      editLibraryAnime({
        id,
        anime: {
          ...anime,
          status,
        },
      })
    );
  };

  const filteredLibrary = useMemo(() => {
    if (!statusFilter) return library;

    return library.filter(
      (anime) => anime.status === statusFilter
    );
  }, [library, statusFilter]);

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
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              My Library
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your anime collection.
            </p>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
          >
            <option value="">All Status</option>
            <option value="Plan To Watch">Plan To Watch</option>
            <option value="Watching">Watching</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <LibraryGrid
          library={filteredLibrary}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />

      </div>
    </section>
  );
}
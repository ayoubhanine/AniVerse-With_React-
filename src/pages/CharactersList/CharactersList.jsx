import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../features/characters/characterSlice";
import CharacterGrid from "../../components/character/CharacterGrid";

export default function CharactersList() {
  const dispatch = useDispatch();

  const { characters, loadings, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1, search: "" }));
  }, [dispatch]);

  if (loadings.characters) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#070B1D]">
        <p className="text-xl text-white">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#070B1D]">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Characters
          </h1>

          <p className="mt-3 text-slate-400">
            Discover your favorite anime characters.
          </p>
        </div>

        <CharacterGrid characters={characters} />
      </div>
    </section>
  );
}
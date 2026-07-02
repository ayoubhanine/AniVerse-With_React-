import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchAnimeCharacters } from "../../features/characters/characterSlice";

import AnimeCharacterGrid from "../../components/character/AnimeCharacterGrid";

export default function Characters() {
  const { animeId } = useParams();

  const dispatch = useDispatch();

  const { animeCharacters, loadings, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchAnimeCharacters(animeId));
  }, [dispatch, animeId]);

  if (loadings.animeCharacters) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#070B1D]">
        <p className="text-white text-xl">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#070B1D]">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-4xl font-bold text-white">
          Anime Characters
        </h1>

        <AnimeCharacterGrid characters={animeCharacters} />

      </div>
    </section>
  );
}
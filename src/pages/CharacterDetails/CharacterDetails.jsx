import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCharacterDetails } from "../../features/characters/characterSlice";

import CharacterHero from "../../components/character/CharacterHero";
import CharacterInfo from "../../components/character/CharacterInfo";
import CharacterAnimeList from "../../components/character/CharacterAnimeList";

export default function CharacterDetails() {
  const { characterId } = useParams();

  const dispatch = useDispatch();

  const { characterDetails, loadings, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacterDetails(characterId));
  }, [dispatch, characterId]);

  if (loadings.details) {
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

  if (!characterDetails) return null;

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <CharacterHero character={characterDetails} />

        <CharacterInfo character={characterDetails} />

        <CharacterAnimeList anime={characterDetails.anime} />

      </div>
    </section>
  );
}
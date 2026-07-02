import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createFavorite,
    createLibraryAnime,
    createRating
 } from "../../features/user/userSlice";

import { fetchAnimeDetails } from "../../features/anime/animeSlice";

import AnimeHero from "../../components/anime/AnimeHero"
import AnimeInfo from "../../components/anime/AnimeInfo"
import AnimeActions from "../../components/anime/AnimeActions";

export default function AnimeDetails() {
  const { animeId } = useParams();

  const dispatch = useDispatch();

  const { animeDetails, loadings, error } = useSelector(
    (state) => state.anime
  );

  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
  }, [dispatch, animeId]);

  if (loadings.details) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-xl text-white">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#070B1D] flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </section>
    );
  }

  if (!animeDetails) return null;

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">

        <AnimeHero anime={animeDetails} />

        <AnimeActions anime={animeDetails} />

        <AnimeInfo anime={animeDetails} />

      </div>
    </section>
  );
}
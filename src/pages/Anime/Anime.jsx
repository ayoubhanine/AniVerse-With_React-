import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAnimeList } from "../../features/anime/animeSlice";

import AnimeGrid from "../../components/anime/AnimeGrid";
import AnimeSearch from "../../components/anime/AnimeSearch";
import Pagination from "../../components/anime/Pagination";

import AnimeFilters from "../../components/anime/AnimeFilters";

export default function Anime() {
  const dispatch = useDispatch();

  const { animeList, loading, error, pagination } = useSelector(
    (state) => state.anime
  );

  const [page, setPage] = useState(1);

  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");
  const[genre,setGenre]=useState("")
const [type,setType]=useState("")
  useEffect(() => {
    dispatch(
      fetchAnimeList({
        page,
        search,
        genre,
        type,
      })
    );
  }, [dispatch, page, search,genre,type]);

  const handleSearch = () => {
    setPage(1);
    setSearch(inputSearch.trim());
  };

  const filteredAnime = useMemo(() => {
    if (!search) return animeList;

    return animeList.filter((anime) =>
      anime.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [animeList, search]);

  if (loading) {
    return (
      <section className="min-h-screen bg-[#070B1D] px-5 py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-white">
            Anime Collection
          </h1>

          <div className="flex h-60 items-center justify-center">
            <p className="text-lg text-white">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#070B1D] px-5 py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-white">
            Anime Collection
          </h1>

          <div className="flex h-60 items-center justify-center">
            <p className="text-lg text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#070B1D] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Anime Collection
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Discover thousands of anime and build your personal collection.
            </p>
          </div>

          <span className="w-fit rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
            {filteredAnime.length} Results
          </span>
        </div>

       
        <div className="mb-8">
          <AnimeSearch
            search={inputSearch}
            setSearch={setInputSearch}
            onSearch={handleSearch}
          />
        </div>
         <div className="mb-8">
          <AnimeFilters
          genre={genre}
          setGenre={setGenre}
          type={type}
          setType={setType}
          />
        </div>

   
        <AnimeGrid animeList={filteredAnime} />

      
        <Pagination
          currentPage={pagination.currentPage}
          lastPage={pagination.lastPage}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
}
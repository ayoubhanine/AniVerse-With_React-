import { Link } from "react-router-dom";

export default function CharacterAnimeList({ anime }) {
  if (!anime.length) return null;

  return (
    <section className="mt-12">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Anime Appearances
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {anime.map((item) => (
          <Link
            key={item.anime.mal_id}
            to={`/anime/${item.anime.mal_id}`}
            className="overflow-hidden rounded-xl bg-slate-900 transition hover:scale-105"
          >
            <img
              src={item.anime.images.jpg.image_url}
              alt={item.anime.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-white font-semibold">
                {item.anime.title}
              </h3>

              <p className="mt-2 text-sm text-violet-400">
                {item.role}
              </p>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}
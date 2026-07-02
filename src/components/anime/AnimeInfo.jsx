export default function AnimeInfo({ anime }) {
  return (
    <section className="rounded-2xl bg-slate-900 p-8 shadow-lg">

      <h2 className="mb-6 text-3xl font-bold text-white">
        Synopsis
      </h2>

      <p className="leading-8 text-slate-300">
        {anime.synopsis || "No synopsis available."}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Studios
          </h3>

          <p className="text-white">
            {anime.studios.length
              ? anime.studios.map((studio) => studio.name).join(", ")
              : "Unknown"}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Type
          </h3>

          <p className="text-white">
            {anime.type}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Episodes
          </h3>

          <p className="text-white">
            {anime.episodes || "Unknown"}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Duration
          </h3>

          <p className="text-white">
            {anime.duration}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Aired
          </h3>

          <p className="text-white">
            {anime.aired.string}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Rating
          </h3>

          <p className="text-white">
            {anime.rating}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Rank
          </h3>

          <p className="text-white">
            #{anime.rank}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Popularity
          </h3>

          <p className="text-white">
            #{anime.popularity}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="mb-2 text-sm uppercase tracking-wide text-slate-400">
            Members
          </h3>

          <p className="text-white">
            {anime.members.toLocaleString()}
          </p>
        </div>

      </div>
    </section>
  );
}
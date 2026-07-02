export default function AnimeTrailer({ anime }) {
  if (!anime.trailer?.embed_url) {
    return (
      <section className="rounded-2xl bg-slate-900 p-8">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Trailer
        </h2>

        <div className="flex h-60 items-center justify-center rounded-xl bg-slate-800">
          <p className="text-slate-400">
            No trailer available for this anime.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-slate-900 p-8">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Trailer
      </h2>

      <div className="overflow-hidden rounded-2xl">
        <iframe
          src={anime.trailer.embed_url}
          title={anime.title}
          className="aspect-video w-full"
          allowFullScreen
        />
      </div>
    </section>
  );
}
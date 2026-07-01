import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#070B1D]/55"></div>

      {/* Content */}
      <div className="relative z-10 mx-5 max-w-xl rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-md">
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Discover Your Next
          <br />
          <span className="text-violet-400">Favorite Anime</span>
        </h1>

        <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
          The ultimate platform to discover, track and organize your favorite
          anime with detailed information and personalized collections.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/anime"
            className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Explore Anime
          </Link>

          <Link
            to="/my-library"
            className="rounded-lg border border-slate-600 bg-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            My Library
          </Link>
        </div>
      </div>
    </section>
  );
}
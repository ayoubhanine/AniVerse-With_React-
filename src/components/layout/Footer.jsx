export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070B1D]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-8 text-center sm:px-8 lg:px-12">
        
       
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Ani<span className="text-violet-500">Verse</span>
        </h2>

    
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:max-w-lg">
          Discover • Explore • Track • Build Your Collection
        </p>

        <div className="my-6 h-px w-full bg-slate-800"></div>

        
        <p className="text-center text-xs text-slate-500 sm:text-sm">
          © {new Date().getFullYear()} AniVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import { Search } from "lucide-react";

export default function AnimeSearch({
  search,
  setSearch,
  onSearch,
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:flex-row">
      
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search anime..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500"
          />
        </div>

       
        <button
          onClick={onSearch}
          className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}
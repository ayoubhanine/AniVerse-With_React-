export default function Pagination({
  currentPage,
  lastPage,
  onPageChange,
}) {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-2 text-white transition hover:border-violet-500 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

   
      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-2 text-white">
        <span className="font-semibold">
          Page {currentPage}
        </span>

        <span className="mx-2 text-slate-400">/</span>

        <span className="text-slate-400">
          {lastPage}
        </span>
      </div>


      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
        className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-2 text-white transition hover:border-violet-500 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  );
}
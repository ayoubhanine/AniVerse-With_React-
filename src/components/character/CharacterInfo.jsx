export default function CharacterInfo({ character }) {
  return (
    <section className="mt-12 rounded-2xl bg-slate-900 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        About
      </h2>

      <p className="leading-8 text-slate-300 whitespace-pre-line">
        {character.about || "No description available."}
      </p>

    </section>
  );
}
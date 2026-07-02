export default function CharacterHero({ character }) {
  return (
    <section className="grid gap-10 lg:grid-cols-3">

      <div>
        <img
          src={character.images.jpg.image_url}
          alt={character.name}
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </div>

      <div className="lg:col-span-2">

        <h1 className="text-4xl font-bold text-white">
          {character.name}
        </h1>

        {character.name_kanji && (
          <p className="mt-2 text-lg text-slate-400">
            {character.name_kanji}
          </p>
        )}

        {character.nicknames.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {character.nicknames.map((nickname) => (
              <span
                key={nickname}
                className="rounded-full bg-violet-600 px-3 py-1 text-sm text-white"
              >
                {nickname}
              </span>
            ))}
          </div>
        )}

      </div>

    </section>
  );
}
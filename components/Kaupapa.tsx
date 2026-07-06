const audiences = [
  "Rangatahi and emerging landowners",
  "Māori freehold land shareholders",
  "Whānau reconnecting with ancestral whenua",
  "Anyone wanting to better understand Māori land ownership and governance",
];

export default function Kaupapa() {
  return (
    <section id="about" className="scroll-mt-24 bg-container px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            The Kaupapa
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-body sm:text-lg">
            This programme helps rangatahi, emerging landowners and whānau
            strengthen their confidence to participate in decisions about the
            stewardship, protection and future use of their whenua.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border-soft bg-container p-8 sm:p-10">
          <h3 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
            Who this is for
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm leading-relaxed text-body sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

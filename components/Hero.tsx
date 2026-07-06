import EnrolButton from "./EnrolButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-hero h-dvh items-center justify-center overflow-hidden bg-container px-6 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-soft opacity-60 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent-soft opacity-50 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-border-soft bg-white/60 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Māori Land Governance Education
          </span>
          <span className="rounded-full bg-accent px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Free of Charge
          </span>
        </div>

        <h1 className="font-display text-5xl font-semibold leading-tight text-heading sm:text-6xl md:text-7xl">
          Te Ara Whakapapa ki te Whenua
        </h1>

        <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-accent">
          Delivered by Te Ahi Kaa
        </p>

        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-body sm:text-lg">
          A 12-month learning journey for whānau with Māori land interests.
          Build your understanding of Māori land ownership, whakapapa,
          succession and governance in a supportive learning environment.
        </p>

        <div className="mt-10">
          <EnrolButton />
        </div>
      </div>
    </section>
  );
}

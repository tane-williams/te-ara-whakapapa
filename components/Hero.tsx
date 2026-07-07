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

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 px-2 sm:gap-3">
          <span className="rounded-full border border-border-soft bg-container/60 px-3.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-heading sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            Māori Land Governance Education
          </span>
          <span className="rounded-full bg-accent px-3.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            Free of Charge
          </span>
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight text-heading sm:text-6xl md:text-7xl">
          Te Ara Whakapapa ki te Whenua
        </h1>

        <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-heading">
          Delivered by Te Ahi Kaa
        </p>

        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-body sm:text-lg">
          A 12-month learning journey for whānau with Māori land interests.
          Build your understanding of Māori land ownership, whakapapa,
          succession and governance in a supportive learning environment.
        </p>

        <div className="mt-10 flex w-full max-w-xs flex-col items-stretch gap-4 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center">
          <EnrolButton className="w-full sm:w-auto" />
          <a
            href="#tutorial"
            className="inline-flex w-full items-center justify-center rounded-full border border-heading bg-transparent px-8 py-4 font-sans text-base font-semibold text-heading transition-colors duration-200 hover:bg-container focus:outline-none focus-visible:ring-2 focus-visible:ring-heading focus-visible:ring-offset-2 sm:w-auto"
          >
            Watch Tutorial
          </a>
        </div>
      </div>
    </section>
  );
}

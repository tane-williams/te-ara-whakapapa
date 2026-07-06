const modules = [
  {
    title: "Whakapapa and connection to whenua",
  },
  {
    title: "Understanding ownership schedules and share fragmentation",
  },
  {
    title: "Succession and inherited land interests",
  },
  {
    title: "Governance participation and decision-making",
  },
  {
    title: "Papakāinga readiness",
  },
  {
    title: "Food resilience, seed sovereignty and environmental stewardship",
  },
];

export default function CourseModules() {
  return (
    <section id="modules" className="bg-container px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            Course Modules
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-body sm:text-lg">
            Six areas of learning guide participants from foundational
            whakapapa through to confident governance and kaitiakitanga.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <li
              key={module.title}
              className="relative flex flex-col rounded-2xl border border-border-soft bg-container p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold text-white ${
                  index % 2 === 0 ? "bg-heading" : "bg-accent"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-heading sm:text-2xl">
                {module.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

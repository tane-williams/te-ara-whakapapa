const reasons = [
  {
    icon: "📖",
    label: "Strengthen your land ownership literacy",
    description: "Build a clearer understanding of your whenua interests.",
  },
  {
    icon: "🌿",
    label: "Understand your role as kaitiaki",
    description: "Grow your confidence as a guardian of ancestral land.",
  },
  {
    icon: "🤝",
    label: "Build confidence to engage in land governance",
    description: "Participate in decisions that shape your whenua's future.",
  },
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Why Join
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.label}
              className="flex flex-col items-center rounded-2xl border border-border-soft bg-container p-6 text-center sm:p-7"
            >
              <span aria-hidden="true" className="text-3xl">
                {reason.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-heading sm:text-xl">
                {reason.label}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

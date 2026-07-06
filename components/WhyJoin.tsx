function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 6.04A8.97 8.97 0 006 3.75c-1.05 0-2.06.18-3 .51v14.25A8.99 8.99 0 016 18c2.3 0 4.41.87 6 2.29m0-14.25a8.97 8.97 0 016-2.29c1.05 0 2.06.18 3 .51v14.25A8.99 8.99 0 0018 18a8.97 8.97 0 00-6 2.29m0-14.25v14.25" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M9 12.75l2.25 2.25L15 9.75m-3-7.04A11.96 11.96 0 013.6 6a12 12 0 00-.6 3.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15a11.96 11.96 0 01-8.25-3.29z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M18 18.72a9.09 9.09 0 003.74-.48 3 3 0 00-4.68-2.72M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      <path d="M6 18.72a5.97 5.97 0 01-.94-3.2 3 3 0 00-4.68 2.72 8.99 8.99 0 003.74.48M12 12.75a5.99 5.99 0 015.06 2.77m-10.12 0A5.99 5.99 0 0112 12.75m5.06 2.77c.62.95.94 2.06.94 3.2A11.94 11.94 0 0112 21c-2.17 0-4.21-.58-5.96-1.58 0-1.14.32-2.25.94-3.2" />
    </svg>
  );
}

const reasons = [
  {
    Icon: BookIcon,
    label: "Strengthen your land ownership literacy",
    description: "Build a clearer understanding of your whenua interests.",
  },
  {
    Icon: ShieldIcon,
    label: "Understand your role as kaitiaki",
    description: "Grow your confidence as a guardian of ancestral land.",
  },
  {
    Icon: UsersIcon,
    label: "Build confidence to engage in land governance",
    description: "Participate in decisions that shape your whenua's future.",
  },
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="bg-container px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            Why Join
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {reasons.map((reason, index) => {
            const { Icon } = reason;
            return (
              <div
                key={reason.label}
                className="flex flex-col items-center rounded-2xl border border-border-soft bg-container p-6 text-center sm:p-7"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${
                    index % 2 === 0 ? "bg-heading" : "bg-accent"
                  }`}
                >
                  <Icon />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-heading sm:text-xl">
                  {reason.label}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-body">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const details = [
  {
    title: "Online learning",
    description: "12 months of online Moodle learning, self-paced.",
  },
  {
    title: "Open to all whānau",
    description:
      "Open to whānau with Māori land interests anywhere in the world.",
  },
  {
    title: "Marae wānanga",
    description:
      "5 marae wānanga for testing, assessment and shared learning.",
  },
  {
    title: "Zoom access",
    description:
      "Zoom access available for participants unable to attend in person.",
  },
  {
    title: "Kaupapa Māori grounded",
    description:
      "Learning grounded in kaupapa Māori values and collective kōrero.",
  },
];

export default function DeliveryInfo() {
  return (
    <section id="delivery" className="scroll-mt-24 bg-container px-6 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            How the Course is Delivered
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="rounded-2xl border border-border-soft bg-container p-6 sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold text-heading">
                {detail.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-body">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

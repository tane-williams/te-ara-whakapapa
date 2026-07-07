const VIDEO_URL =
  "https://j9ahi9vxbuzebgff.public.blob.vercel-storage.com/Sign%20up%20tutorial-1.mp4";

const requirements = [
  "At least 10 characters long",
  "Include at least 1 Capital Letter",
  "Include at least 1 number",
  "Don't use your username, first name, or last name",
];

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="4.5" y="10.5" width="15" height="9.75" rx="2" />
      <path d="M8.25 10.5V7.5a3.75 3.75 0 117.5 0v3" />
    </svg>
  );
}

export default function VideoTutorial() {
  return (
    <section id="tutorial" className="scroll-mt-24 bg-container px-6 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-heading sm:text-5xl">
            See How It Works
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-body sm:text-lg">
            Watch a walkthrough of the Te Ara Whakapapa sign-up process.
          </p>
        </div>

        <div className="mx-auto mt-14 w-full overflow-hidden rounded-2xl border border-border-soft shadow-sm">
          <video
            controls
            preload="metadata"
            className="block h-auto w-full"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mx-auto mt-8 rounded-2xl border border-border-soft bg-container p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-heading text-white">
              <LockIcon />
            </span>
            <h3 className="font-display text-xl font-bold text-heading sm:text-2xl">
              Creating Your Password
            </h3>
          </div>
          <p className="mt-3 font-sans text-sm leading-relaxed text-body sm:text-base">
            Follow these simple rules and you&rsquo;ll be set up in seconds.
          </p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {requirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-start gap-2.5 font-sans text-sm leading-relaxed text-body"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"
                />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-border-faint bg-container p-4 sm:p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-heading">
              Easy Example
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-body sm:text-base">
              For example:{" "}
              <span className="font-semibold text-heading">
                Kereru42River
              </span>{" "}
              or{" "}
              <span className="font-semibold text-heading">Whenua7Awa</span> —
              an easy word or two, plus a number, with one Capital Letter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border-soft bg-heading px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
        <p className="font-display text-lg font-semibold text-container">
          Te Ara Whakapapa ki te Whenua
        </p>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
          Delivered by Te Ahi Kaa
        </p>
        <p className="mt-2 font-sans text-xs text-container/80">
          &copy; {year} Te Ara Whakapapa ki te Whenua. All rights reserved.
        </p>
        <p className="font-sans text-xs text-container/80">
          <a
            href="https://www.facebook.com/erica.burke.3133"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-soft hover:underline"
          >
            Erica Burke — Course Coordinator
          </a>
        </p>
      </div>
    </footer>
  );
}

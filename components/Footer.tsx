export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-faint bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
        <p className="font-display text-lg font-semibold text-heading">
          Te Ara Whakapapa ki te Whenua
        </p>
        <p className="font-sans text-xs text-body">
          &copy; {year} Te Ara Whakapapa ki te Whenua. All rights reserved.
        </p>
        <p className="font-sans text-xs text-body">
          <a
            href="https://www.facebook.com/erica.burke.3133"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Erica Burke — Course Coordinator
          </a>
        </p>
      </div>
    </footer>
  );
}

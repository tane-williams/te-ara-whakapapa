"use client";

import { useState } from "react";
import Image from "next/image";

const MOODLE_SIGNUP_URL = "https://teara.moodlecloud.com/login/signup.php";

const links = [
  { href: "#about", label: "About" },
  { href: "#modules", label: "Modules" },
  { href: "#delivery", label: "Delivery" },
  { href: "#why-join", label: "Why Join" },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-heading shadow-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-container"
        >
          <span className="relative inline-flex h-8 w-8 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-accent-soft/80 md:h-10 md:w-10">
            <Image
              src="/logo.png"
              alt="Te Ara Whakapapa logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span>Te Ara Whakapapa</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-container/85 transition-colors hover:text-accent-soft"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={MOODLE_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Enrol Now
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-container transition-colors hover:bg-white/10 md:hidden"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border-soft bg-heading px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 font-sans text-sm font-medium text-container/85 transition-colors hover:bg-white/10 hover:text-accent-soft"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

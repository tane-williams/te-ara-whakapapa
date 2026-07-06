# Te Ara Whakapapa

A single-page Next.js 14 (App Router) landing page for **Te Ara Whakapapa** (Te Ara Whakapapa ki te Whenua) — a Māori land governance education course delivered via Moodle.

Front-end only, no backend. Built with Tailwind CSS, fully responsive and mobile-first.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- `next/font/google` — Cormorant Garamond (display) + Inter (body)

## Design Tokens

| Token | Value |
| --- | --- |
| Primary Accent | `#C1693C` |
| Secondary Accent | `#ECD2C4` |
| Container Background | `#FAF2EE` |
| Body text | `#333333` |
| Heading text | `#6B4A3D` |
| Borders | `#ECD2C4` / `#F3E9E5` |

## Notes

- Both "Enrol Now" CTAs link to `https://teara.moodlecloud.com/login/signup.php` in a new tab.
- Account setup details (username/password format) are intentionally not published on the page — enrolment instructions are surfaced generically as "simple setup instructions provided upon enrolment".
- No footer contact details are included since no verified contact email was supplied.

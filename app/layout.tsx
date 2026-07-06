import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tearawhakapapa.com"),
  title:
    "Te Ara Whakapapa ki te Whenua | Māori Land Ownership Literacy Initiative",
  description:
    "A free 12-month learning journey for whānau with Māori land interests. Build your understanding of whakapapa, land ownership, succession and governance. Delivered by Te Ahi Kaa.",
  keywords: [
    "Te Ara Whakapapa",
    "Te Ara Whakapapa ki te Whenua",
    "Māori land governance",
    "whakapapa",
    "whenua",
    "Māori land trust",
    "Te Ahi Kaa",
    "Māori land ownership literacy",
  ],
  openGraph: {
    title: "Te Ara Whakapapa ki te Whenua",
    description:
      "A free 12-month learning journey for whānau with Māori land interests, delivered by Te Ahi Kaa.",
    url: "https://www.tearawhakapapa.com",
    siteName: "Te Ara Whakapapa",
    images: [{ url: "/logo.png", width: 1200, height: 1200 }],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Te Ara Whakapapa ki te Whenua",
    description:
      "A free 12-month learning journey for whānau with Māori land interests.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.tearawhakapapa.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

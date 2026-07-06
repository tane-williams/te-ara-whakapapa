import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import VideoTutorial from "@/components/VideoTutorial";
import Kaupapa from "@/components/Kaupapa";
import CourseModules from "@/components/CourseModules";
import DeliveryInfo from "@/components/DeliveryInfo";
import WhyJoin from "@/components/WhyJoin";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Te Ara Whakapapa ki te Whenua",
  description:
    "A free 12-month learning journey for whānau with Māori land interests, covering whakapapa, ownership, succession and governance.",
  provider: {
    "@type": "Organization",
    name: "Te Ahi Kaa",
    sameAs: "https://tearawhakapapa.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NZD",
  },
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Nav />
      <main id="top">
        <Hero />
        <VideoTutorial />
        <Kaupapa />
        <CourseModules />
        <DeliveryInfo />
        <WhyJoin />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

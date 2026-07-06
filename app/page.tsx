import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import VideoTutorial from "@/components/VideoTutorial";
import Kaupapa from "@/components/Kaupapa";
import CourseModules from "@/components/CourseModules";
import DeliveryInfo from "@/components/DeliveryInfo";
import WhyJoin from "@/components/WhyJoin";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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

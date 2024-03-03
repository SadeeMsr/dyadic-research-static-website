import AboutUsTab from "@/components/AboutUsTab";
import ClientV1 from "@/components/ClientV1";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import TechCardsGrid from "@/components/TechCardsGrid";

const carouselImg = [
  {
    id: 0,
    path: "/assets/carousel-img-01.png",
  },
  {
    id: 1,
    path: "/assets/carousel-img-02.png",
  },
  {
    id: 2,
    path: "/assets/carousel-img-03.png",
  },
];

const placeholderTexts = [
  {
    type: "heading2",
    text: "A simple solution is a smart one.",
  },
  {
    type: "heading2",
    text: "Farmers as researchers, researchers as farmers.",
  },
  {
    type: "heading2",
    text: "Turns waste into resources.",
  },
];

export default function Home() {
  return (
    <>
      <HeroBgCarousel
        carouselImg={carouselImg}
        placeholderTexts={placeholderTexts}
      />
      <OurServices />
      <OurWork />
      <AboutUsTab />
      <TechCardsGrid />
      {/* <Client /> */}
      <ClientV1 />
    </>
  );
}

import AboutUsTab from "@/components/AboutUsTab";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import HeroContent from "@/components/HeroContent";
import OurServices from "@/components/OurServices";
import TechCardsGrid from "@/components/TechCardsGrid";

export default function Home() {
  return (
    <>
      <HeroContent />
      <HeroBgCarousel />
      <OurServices />
      <TechCardsGrid />
      <AboutUsTab />
    </>
  );
}

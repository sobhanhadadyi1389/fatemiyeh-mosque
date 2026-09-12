import AIQuestionBanner from "@/components/AIQuestionBanner";
import FatemiyehHero from "@/components/FatemiyehHero";
import FeatureBanners from "@/components/FeatureBanners";
import Footer from "@/components/Footer";
import LatestPrograms from "@/components/LatestPrograms";
import SalehinGroups from "@/components/SalehinGroups";
import SalehinIntroduction from "@/components/SalehinIntroduction";
import TeachersSection from "@/components/TeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FatemiyehHero />
      <LatestPrograms />
      <AIQuestionBanner />
      <TeachersSection />
      <TestimonialsSection />
      <FeatureBanners />
      <SalehinIntroduction />
      <SalehinGroups />
      <Footer />
    </>
  );
}

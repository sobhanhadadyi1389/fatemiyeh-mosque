import FatemiyehHero from "@/components/FatemiyehHero";
import LatestPrograms from "@/components/LatestPrograms";
import AIQuestionBanner from "@/components/AIQuestionBanner";
import TeachersSection from "@/components/TeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeatureBanners from "@/components/FeatureBanners";
import SalehinIntroduction from "@/components/SalehinIntroduction";
import SalehinGroups from "@/components/SalehinGroups";

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
    </>
  );
}
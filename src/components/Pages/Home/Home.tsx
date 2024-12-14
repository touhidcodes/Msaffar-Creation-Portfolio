import CentricSection from "@/components/Custom/CentricSection/CentricSection";
import FeaturedBrands from "@/components/Custom/FeatureBrands/FeatureBrands";
import GrowthSection from "@/components/Custom/GrowthSection/GrowthSection";
import HeroSection from "@/components/Custom/Hero/Hero";
import ToolsSkills from "@/components/Custom/ToolsSkills/ToolsSkills";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CentricSection />
      <FeaturedBrands />
      <GrowthSection />
      <ToolsSkills />
    </div>
  );
};

export default HomePage;

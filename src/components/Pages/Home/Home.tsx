import CentricSection from "@/components/Custom/CentricSection/CentricSection";
import FeaturedBrands from "@/components/Custom/FeatureBrands/FeatureBrands";
import GrowthSection from "@/components/Custom/GrowthSection/GrowthSection";
import HeroSection from "@/components/Custom/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CentricSection />
      <GrowthSection />
      <FeaturedBrands />
    </div>
  );
};

export default HomePage;

import CentricSection from "@/components/Custom/CentricSection/CentricSection";
import FeaturedBrands from "@/components/Custom/FeatureBrands/FeatureBrands";
import GotIdea from "@/components/Custom/GotIdea/GotIdea";
import GrowthSection from "@/components/Custom/GrowthSection/GrowthSection";
import HeroSection from "@/components/Custom/Hero/Hero";
import MyBlogs from "@/components/Custom/MyBlogs/MyBlogs";
import ProjectsSection from "@/components/Custom/ProjectsSection/ProjectsSection";
import ServiceSection from "@/components/Custom/ServiceSection/ServiceSection";
import ToolsSkills from "@/components/Custom/ToolsSkills/ToolsSkills";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBrands />
      <CentricSection />
      <GrowthSection />
      <ToolsSkills />
      <GotIdea />
      <ServiceSection />
      <MyBlogs />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;

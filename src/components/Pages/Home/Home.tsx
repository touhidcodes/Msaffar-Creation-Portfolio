import CentricSection from "@/components/Custom/CentricSection/CentricSection";
import FeaturedBrands from "@/components/Custom/FeatureBrands/FeatureBrands";
import GotIdea from "@/components/Custom/GotIdea/GotIdea";
import GrowthSection from "@/components/Custom/GrowthSection/GrowthSection";
import HeroSection from "@/components/Custom/Hero/Hero";
import MyBlogs from "@/components/Custom/BlogsSection/BlogsSection";
import ProjectsSection from "@/components/Custom/ProjectsSection/ProjectsSection";
import ServiceSection from "@/components/Custom/ServiceSection/ServiceSection";
import ToolsSkills from "@/components/Custom/ToolsSkills/ToolsSkills";
import BlogsSection from "@/components/Custom/BlogsSection/BlogsSection";
import ContactSection from "@/components/Custom/ContactSection/ContactSection";

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
      <ContactSection />
      <ProjectsSection />
      <BlogsSection />
    </div>
  );
};

export default HomePage;

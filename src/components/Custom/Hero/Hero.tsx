import Image from "next/image";
import hero from "../../../../public/assets/logo/image.png";
import Button from "@/components/ui/Button/Button";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen">
      <div className="max-w-screen-xl mx-auto lg:px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image src={hero} alt="Hero Image" width={300} height={200} />
          </div>

          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-7xl font-bold">
              Custom Logo & Brand Identity Designer
            </h1>
            <p className="py-6">
              I specialize in creating user-centric solutions that align with
              business objectives, drawing from a decade of industry expertise
              across various sectors, Im currently based in Dubai!
            </p>
            <Button link="#talk" text="Lets Talk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

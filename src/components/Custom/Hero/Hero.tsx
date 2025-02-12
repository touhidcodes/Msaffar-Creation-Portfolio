import Image from "next/image";
import hero from "../../../../public/assets/logo/image.png";
import Button from "@/components/ui/Button/Button";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center">
      <div className="px-6 py-6 lg:py-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Right Side - Image (Shown first on mobile) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-7xl font-bold">
              Custom Logo & Brand Identity Designer
            </h1>
            <p className="py-4 text-base lg:text-lg leading-relaxed">
              I specialize in creating user-centric solutions that align with
              business objectives, drawing from a decade of industry expertise
              across various sectors. I'm currently based in Dubai!
            </p>
            <div className="mt-4 justify-end">
              <Button
                text="Let's Talk"
                link="/contact"
                className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
              />
            </div>
          </div>
          {/* Left Side - Text */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={hero}
              alt="Hero Image"
              width={300}
              height={200}
              className="max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

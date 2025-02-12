import Image from "next/image";
import hero from "../../../../public/assets/logo/image.png";
import Button from "@/components/ui/Button/Button";

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto lg:p-20">
        <div className=" grid grid-cols-2 gap-10">
          {/* Right Side - Image */}
          <div className="w-full">
            <Image src={hero} alt="Hero Image" width={300} height={200} />
          </div>

          {/* Left Side - Text */}
          <div className="w-full">
            <h1 className="text-7xl font-bold">
              Custom Logo & Brand Identity Designer
            </h1>
            <p className="py-6">
              I specialize in creating user-centric solutions that align with
              business objectives, drawing from a decade of industry expertise
              across various sectors, Im currently based in Dubai!
            </p>
            <Button
              link="#talk"
              text="Lets Talk"
              className="inline-block bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

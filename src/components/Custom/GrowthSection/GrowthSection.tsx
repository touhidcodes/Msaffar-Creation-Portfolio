import Image from "next/image";
import growth from "../../../../public/assets/images/growth.png";
import Button from "@/components/ui/Button/Button";

const GrowthSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-8 md:p-16">
        {/* Left Side: Image */}
        <div className="text-center md:text-left w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Bridging users needs <br />
            with business goals
          </h2>
          <p className="text-gray-600 mb-6">
            I specialize in creating user-centric solutions that align with
            business objectives, drawing from a decade of industry expertise
            across various sectors. Im currently based in Dubai!
          </p>
          <Button text="Let's Talk" link="/contact" />
        </div>

        {/* Right Side: Text content */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src={growth}
            alt="User-centric approach"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;

import Image from "next/image";
import centric from "../../../../public/assets/images/centric.png";
import Button from "@/components/ui/Button/Button";

const CentricSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-8 md:p-16">
        {/* Left Side: Image */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-8">
          <Image
            src={centric}
            alt="User-centric approach"
            width={200}
            height={200}
            className="w-40 h-40 md:w-64 md:h-64"
          />
        </div>

        {/* Right Side: Text content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-bold mb-4">
            Design Thinking: <br /> User-centric Approach
          </h2>
          <p className="text-gray-600 mb-6">
            I specialize in creating user-centric solutions that align with
            business objectives, drawing from a decade of industry expertise
            across various sectors. Im currently based in Dubai!
          </p>
          <Button text="Let's Talk" link="/contact" />
        </div>
      </div>
    </section>
  );
};

export default CentricSection;

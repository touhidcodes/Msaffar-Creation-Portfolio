import Image from "next/image";
import centric from "../../../../public/assets/images/centric.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CentricSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-6 px-6 lg:py-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={centric}
            alt="User-centric approach"
            width={400}
            height={400}
            className="w-full max-w-sm lg:max-w-md h-auto"
          />
        </div>

        {/* Right Side: Text content (Evenly spaced) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-full text-center md:text-left">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Design Thinking: <br />
              User-centric Approach
            </h2>
            <p className="text-gray-600 mt-4">
              I specialize in creating user-centric solutions that align with
              business objectives, drawing from a decade of industry expertise
              across various sectors. I'm currently based in Dubai!
            </p>
          </div>
          <div className="mt-10 justify-end mb-5 lg:mb-0">
            <Button>
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentricSection;

import Image from "next/image";
import growth from "../../../../public/assets/images/growth.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GrowthSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-6 px-6 lg:py-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
          {/* Left Side: Image */}
          <div className="text-center md:text-left w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Bridging users needs <br />
              with business goals
            </h2>
            <p className="text-gray-600 mb-6">
              I specialize in creating user-centric solutions that align with
              business objectives, drawing from a decade of industry expertise
              across various sectors. Im currently based in Dubai!
            </p>
            <div className="mt-10 justify-end">
              <Button>
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </div>
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
      </div>
    </section>
  );
};

export default GrowthSection;

"use client";

import Image from "next/image";
import hero from "../../../../public/assets/logo/image.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useResume } from "@/hooks/useResume";

const HeroSection = () => {
  const { resume, loading } = useResume();

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
              across various sectors. I'm currently based in Bangladesh!
            </p>
            <div className="flex mt-4 space-x-20">
              <Button>
                <Link href="#contact">Let's Talk</Link>
              </Button>
              {loading ? (
                <Button>Loading...</Button>
              ) : (
                resume?.url && (
                  <Button asChild>
                    <Link
                      href={resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </Link>
                  </Button>
                )
              )}
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

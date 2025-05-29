"use client";

import Button from "@/components/ui/Button/Button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="grid md:grid-cols-2 w-full max-w-6xl gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Let’s connect and start the conversations!
          </h1>
          <p className="text-gray-600">
            Whether you have questions, want to discuss a project, or simply
            want to chat about design feel free to reach out. <br />
            <a href="#" className="text-blue-600 underline">
              Drop me a message
            </a>
          </p>

          {/* Icon line */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center">
              <div className="text-xs font-semibold">YOU</div>
              <div className="bg-black p-4 rounded">
                <Image
                  src="/you-icon.svg"
                  alt="You Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="h-12 w-1 bg-black" />
            <div>
              <Image
                src="/plug-icon.svg"
                alt="Plug Icon"
                width={40}
                height={40}
              />
            </div>
            <div className="h-12 w-1 bg-black" />
            <div className="flex flex-col items-center">
              <div className="bg-black p-4 rounded">
                <Image
                  src="/me-icon.svg"
                  alt="Me Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-xs font-semibold">ME</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="space-y-4 w-full">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Textarea placeholder="Message" rows={4} required />
          <Button
            text="submit"
            type="submit"
            className="w-full bg-black text-white"
          ></Button>
        </form>
      </div>
    </section>
  );
}

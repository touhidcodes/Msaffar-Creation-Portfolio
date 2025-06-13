"use client";

import FormContainer from "@/components/Forms/FormContainer";
import FormInput from "@/components/Forms/FormInput";
import FormTextarea from "@/components/Forms/FormTextarea";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMessageSchema } from "@/schema/message";

export default function ContactSection() {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="grid md:grid-cols-3 w-full max-w-6xl gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Let’s connect and start the conversations!
          </h1>
          <p className="text-gray-600">
            Whether you have questions, want to discuss a project, or simply
            want to chat about design feel free to reach out. <br />
            <a href="#" className="text-black underline font-semibold">
              Drop me a message
            </a>
          </p>
        </div>

        {/* Middle Section - Plug Illustration */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/connect.png"
            alt="Connection Illustration"
            width={100}
            height={300}
            className="h-auto w-auto"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-4 w-full">
          <FormContainer
            onSubmit={handleSubmit}
            resolver={zodResolver(createMessageSchema)}
            defaultValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
          >
            <FormInput
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your name"
              required
            />
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <FormInput
              name="subject"
              label="Subject"
              type="text"
              placeholder="Enter your email"
              required
            />
            <FormTextarea
              name="message"
              label="Description"
              placeholder="Write a detailed description..."
              required
            />
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </FormContainer>
          {/* <Button
            text="Submit"
            link="/projects"
            className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
          /> */}
        </div>
      </div>
    </section>
  );
}

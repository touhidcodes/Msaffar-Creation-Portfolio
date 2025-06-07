"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/Forms/FormInput";
import FormContainer from "@/components/Forms/FormContainer";
import FormSelect from "@/components/Forms/FormSelect";
import FormTextarea from "@/components/Forms/FormTextarea";
import FormFieldArray from "@/components/Forms/FormFieldArray";
import { FieldValues } from "react-hook-form";
import { createProjectSchema } from "@/schema/project";
import { toast } from "sonner";
import { fetchWithAuth } from "@/service/fetchWithAuth";

export default function CreateProjectPage() {
  // const handleSubmit = async (values: FieldValues) => {
  //   console.log("Form submitted:", values);
  //   // send to API here

  //   const response = await axios.post("/projects", values); // cookie auto-sent
  //   console.log(response);
  // };

  const handleSubmit = async (values: FieldValues) => {
    try {
      const data = await fetchWithAuth("/api/projects", {
        method: "POST",
        body: JSON.stringify(values),
      });
      // console.log(res);
      // const data = await res.json();
      console.log(data);

      if (!data.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Project created successfully");
      }
    } catch (error: any) {
      console.error("Error submitting project:", error);
      toast.error(error.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-5">
          Create New Project
        </h2>

        <FormContainer
          onSubmit={handleSubmit}
          resolver={zodResolver(createProjectSchema)}
          defaultValues={{
            name: "",
            description: "",
            images: [],
            tags: [],
            tools: [],
            isFeatured: false,
            binanceProfileUrl: "",
            client: "",
            projectDuration: "",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-auto">
            {/* Left Column */}
            <div className="space-y-4 w-full max-w-sm mx-auto">
              <FormInput
                label="Project Name"
                name="name"
                placeholder="Awesome Project"
                required
              />
              <FormTextarea
                name="description"
                label="Project Description"
                placeholder="Write a detailed description..."
                required
              />
              <FormFieldArray
                name="tags"
                label="Tags"
                placeholder="e.g. Logo Design"
                required
              />
              <FormFieldArray
                name="images"
                label="Image URLs"
                placeholder="https://img1..."
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-full max-w-sm mx-auto">
              <FormInput
                label="Client Name"
                name="client"
                placeholder="Client Name"
              />
              <FormInput
                label="Project Duration"
                name="projectDuration"
                placeholder="e.g. 3 months"
              />
              <FormSelect
                name="isFeatured"
                label="Highlight Project"
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
                required
              />
              <FormInput
                label="Binance Profile URL"
                name="binanceProfileUrl"
                placeholder="https://..."
              />
              <FormFieldArray
                name="tools"
                label="Tools"
                placeholder="e.g. Adobe Illustrator"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button type="submit" className="w-full max-w-xs">
              Create Project
            </Button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
}

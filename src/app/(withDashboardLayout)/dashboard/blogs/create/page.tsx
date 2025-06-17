"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/Forms/FormInput";
import FormContainer from "@/components/Forms/FormContainer";
import FormSelect from "@/components/Forms/FormSelect";
import FormTextarea from "@/components/Forms/FormTextarea";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { fetchWithAuth } from "@/service/fetchWithAuth";
import FormRichTextEditor from "@/components/Forms/FormTextEditor";
import { createBlogSchema } from "@/schema/blog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CreateBlogPage() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values: FieldValues) => {
    try {
      setLoading(true);
      const res = await fetchWithAuth("/api/blogs", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Blogs created successfully");
      }
    } catch (error: any) {
      // console.error("Error submitting project:", error);
      toast.error(error.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-5">Create New Blog</h2>

        <FormContainer
          onSubmit={handleSubmit}
          resolver={zodResolver(createBlogSchema)}
          defaultValues={{
            title: "",
            description: "",
            image: "",
            isFeatured: false,
            content: "",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-auto">
            {/* Left Column */}
            <div className="space-y-4 w-full max-w-sm mx-auto">
              <FormInput
                label="Blog Title"
                name="title"
                placeholder="Write your blog title"
                required
              />
              <FormTextarea
                name="description"
                label="Short Description"
                placeholder="Short blog summary..."
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-full max-w-sm mx-auto">
              <FormInput
                name="image"
                label="Thumbnail Image URL"
                placeholder="https://example.com/image.jpg"
                required
              />
              <FormSelect
                name="isFeatured"
                label="Feature this blog?"
                placeholder="No"
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
              />
            </div>
          </div>
          <div className="w-full mx-auto px-12">
            <FormRichTextEditor
              name="content"
              label="Main Content"
              required
              description="Write the full blog content here."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-full max-w-xs"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Create Blog"
              )}
            </Button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
}

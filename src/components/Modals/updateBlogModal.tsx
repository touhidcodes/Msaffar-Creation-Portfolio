"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/Forms/FormInput";
import FormContainer from "@/components/Forms/FormContainer";
import FormSelect from "@/components/Forms/FormSelect";
import FormTextarea from "@/components/Forms/FormTextarea";
import { FieldValues } from "react-hook-form";
import { createBlogSchema } from "@/schema/blog";
import { fetchWithAuth } from "@/service/fetchWithAuth";
import { toast } from "sonner";
import { TBlogData } from "@/types";
import FormRichTextEditor from "../Forms/FormTextEditor";

type Props = {
  open: boolean;
  onClose: () => void;
  blogData: TBlogData;
};

export default function UpdateBlogModal({ open, onClose, blogData }: Props) {
  const handleUpdate = async (values: FieldValues) => {
    try {
      const res = await fetchWithAuth(`/api/blogs/${blogData?.id}`, {
        method: "PATCH",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Blog updated successfully");
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || "Update failed");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
        </DialogHeader>

        <FormContainer
          onSubmit={handleUpdate}
          resolver={zodResolver(createBlogSchema)}
          defaultValues={{
            title: blogData?.title,
            description: blogData?.description,
            image: blogData?.image,
            isFeatured: blogData?.isFeatured,
            content: blogData?.content,
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
          <div className="w-full mx-auto">
            <FormRichTextEditor
              name="content"
              label="Main Content"
              required
              description="Write the full blog content here."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end items-center gap-4 pt-6">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </div>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
}

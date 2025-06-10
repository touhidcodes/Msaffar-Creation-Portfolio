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
import FormFieldArray from "@/components/Forms/FormFieldArray";
import { FieldValues } from "react-hook-form";
import { createProjectSchema } from "@/schema/project";
import { fetchWithAuth } from "@/service/fetchWithAuth";
import { toast } from "sonner";
import { TProjectData } from "@/types";

type Props = {
  open: boolean;
  onClose: () => void;
  projectData: TProjectData;
};

export default function UpdateProjectModal({
  open,
  onClose,
  projectData,
}: Props) {
  const handleUpdate = async (values: FieldValues) => {
    try {
      const res = await fetchWithAuth(`/api/projects/${projectData?.id}`, {
        method: "PATCH",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Project updated successfully");
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
          <DialogTitle>Update Project</DialogTitle>
        </DialogHeader>

        <FormContainer
          onSubmit={handleUpdate}
          resolver={zodResolver(createProjectSchema)}
          defaultValues={{
            name: projectData?.name,
            description: projectData?.description,
            images: projectData?.images,
            tags: projectData?.tags,
            tools: projectData?.tools,
            isFeatured: projectData?.isFeatured,
            binanceProfileUrl: projectData?.binanceProfileUrl,
            client: projectData?.client,
            projectDuration: projectData?.projectDuration,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
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

            <div className="space-y-4">
              <FormInput
                name="client"
                label="Client Name"
                placeholder="Client Name"
              />
              <FormInput
                name="projectDuration"
                label="Project Duration"
                placeholder="e.g. 3 months"
              />
              <FormSelect
                name="isFeatured"
                label="Highlight Project"
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
              />
              <FormInput
                name="binanceProfileUrl"
                label="Binance Profile URL"
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

"use client";

import FormContainer from "@/components/Forms/FormContainer";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "@/components/ui/button";
import { createResumeSchema } from "@/schema/resume";
import { fetchWithAuth } from "@/service/fetchWithAuth";
import { TResumeData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ResumePage = () => {
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<TResumeData | null>(null);

  const fetchResume = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/resume");
      const data = await res.json();
      if (data) setResume(data);
    } catch (error) {
      console.error("Failed to fetch resume:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const handleSubmit = async (values: FieldValues) => {
    try {
      setLoading(true);
      const res = await fetchWithAuth("/api/resume", {
        method: "PUT",
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong!");
      } else {
        toast.success("Resume updated successfully!");
        fetchResume();
      }
    } catch (error: any) {
      toast.error(error.message || "Authentication failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 mt-2">
      <div className="flex justify-between items-center px-6">
        <h2 className="text-xl font-semibold">My Resume</h2>
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Button variant="outline">Update Resume</Button>
        )}
      </div>

      {/* Current Resume Info Display */}
      <div className="flex items-center justify-center">
        <div className="rounded-lg border p-5 shadow-sm space-y-2 bg-muted max-w-md w-full">
          <h3 className="text-lg font-semibold">Current Resume Info</h3>

          <div>
            <strong>Title:</strong>{" "}
            <span className="text-muted-foreground">
              {resume?.title || "N/A"}
            </span>
          </div>

          <div>
            <strong>View Link:</strong>{" "}
            {resume?.url ? (
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                {resume.url}
              </a>
            ) : (
              <span className="text-muted-foreground">N/A</span>
            )}
          </div>

          <div>
            <strong>Download Link:</strong>{" "}
            {resume?.downloadUrl ? (
              <a
                href={resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                {resume.downloadUrl}
              </a>
            ) : (
              <span className="text-muted-foreground">N/A</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full">
          {/* Resume Form */}
          <FormContainer
            onSubmit={handleSubmit}
            resolver={zodResolver(createResumeSchema)}
            defaultValues={{
              title: "",
              url: "",
              downloadUrl: "",
            }}
          >
            <div className="space-y-4">
              <FormInput
                label="Resume Title"
                name="title"
                placeholder="e.g. Senior Developer Resume"
                required
              />
              <FormInput
                label="Google Drive View URL"
                name="url"
                placeholder="https://drive.google.com/view..."
                required
              />
              <FormInput
                label="Google Drive Download URL"
                name="downloadUrl"
                placeholder="https://drive.google.com/download..."
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Update Resume"
                )}
              </Button>
            </div>
          </FormContainer>
          {loading && (
            <div className="flex justify-center items-center h-[300px]">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

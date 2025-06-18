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
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 my-4 md:my-6 mb-12 px-4 md:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0">
        <h2 className="text-xl font-semibold text-center sm:text-left">
          My Resume
        </h2>
        {loading ? (
          <div className="flex justify-center sm:justify-end">
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
        ) : (
          <div className="flex justify-center sm:justify-end">
            <Button variant="outline">Update Resume</Button>
          </div>
        )}
      </div>

      {/* Resume Info Display */}
      <div className="flex justify-center">
        <div className="rounded-lg border p-5 shadow-sm space-y-3 bg-muted max-w-md w-full text-sm text-muted-foreground">
          <h3 className="text-base font-semibold text-foreground mb-2">
            Current Resume Info
          </h3>

          <div>
            <span className="font-semibold">Title: </span>
            <span className="text-foreground">{resume?.title || "N/A"}</span>
          </div>
          {/* View Resume Link */}
          <div>
            <span className="font-semibold">View URL: </span>
            {resume?.url ? (
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Resume
              </a>
            ) : (
              "N/A"
            )}
          </div>

          {/* Download Resume Link */}
          <div>
            <span className="font-semibold">Download URL: </span>
            {resume?.downloadUrl ? (
              <a
                href={resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Download Resume
              </a>
            ) : (
              "N/A"
            )}
          </div>
        </div>
      </div>

      {/* Resume Form */}
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
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
                placeholder="e.g. Graphics Designer Resume"
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

            <div className="pt-4">
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
            <div className="flex justify-center items-center h-48">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

"use client";

import { TResumeData } from "@/types";
import { useEffect, useState } from "react";

export const useResume = () => {
  const [resume, setResume] = useState<TResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/resume");
        const data = await res.json();
        if (data) {
          setResume(data);
        }
      } catch (err) {
        console.error("Failed to fetch resume:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  return { resume, loading };
};

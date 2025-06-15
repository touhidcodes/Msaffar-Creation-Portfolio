"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const ResumePage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="space-y-2 mt-2">
      <div className="flex justify-between items-center px-6">
        <h2 className="text-xl font-semibold">My Resume</h2>
        <Button variant="outline">Update Resume</Button>
      </div>

      <div className="grid w-full [&>div]:h-full [&>div]:border [&>div]:rounded">
        {loading && (
          <div className="flex justify-center items-center h-[300px]">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;

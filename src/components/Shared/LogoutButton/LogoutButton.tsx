"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
      const result = await res.json();

      if (!res.ok) {
        toast.warning(result.error);
      } else {
        toast.success(result.message);
        router.push("/");
      }
    } catch (error) {
      toast.error("Failed to logout. Try again.");
    }
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
};

export default LogoutButton;

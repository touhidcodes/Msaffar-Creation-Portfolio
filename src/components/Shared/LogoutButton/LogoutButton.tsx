"use client";

import { Button } from "@/components/ui/button";
import { deleteCookies } from "@/service/actions/deleteCookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await deleteCookies();

      toast.success("Logout successful!");
      router.push("/");
    } catch (error) {
      toast.error("Failed to logout. Try again!");
    }
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
};

export default LogoutButton;

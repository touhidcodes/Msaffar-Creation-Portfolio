"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormContainer from "@/components/Forms/FormContainer";
import { FieldValues } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { loginValidationSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.warning(result.error);
      } else {
        toast.success(result.message);
        router.push("/dashboard");
      }
    } catch (error) {
      // console.error("Login error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormContainer
            onSubmit={handleSubmit}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="your password"
              required
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Login"}
            </Button>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
}

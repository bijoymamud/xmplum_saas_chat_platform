"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 characters long"),
});

export default function VerifyOtpPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      router.push("/reset-password"); // Push them to define new password
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Verify Email</h1>
        <p className="text-sm text-muted-foreground">
          We sent a 6-digit code to your email. Enter it below to verify.
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                id="otp"
                placeholder="123456"
                type="text"
                autoComplete="one-time-code"
                maxLength={6}
                className="text-center text-lg tracking-widest"
                disabled={isLoading}
                {...register("otp")}
              />
              {errors.otp && (
                <p className="text-[0.8rem] font-medium text-destructive text-center">{errors.otp.message}</p>
              )}
            </div>
            <Button disabled={isLoading} className="mt-2 w-full">
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </div>
        </form>
      </div>
      <p className="text-center text-sm text-muted-foreground pt-4">
        Didn't receive a code?{" "}
        <button
          className="underline underline-offset-4 hover:text-primary font-medium"
        >
          Resend Code
        </button>
      </p>
      <div className="text-center pt-2">
         <Link
            href="/login"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Back to login
          </Link>
      </div>
    </>
  );
}
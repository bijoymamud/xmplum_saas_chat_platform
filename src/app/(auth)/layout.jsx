import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex items-center justify-center h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r border-border">
        
      <div className="">
        <h1 className="text-primary text-4xl font-bold">Welcome Back</h1>
      </div>
      
      </div>
      <div className="relative flex min-h-screen items-center justify-center p-4 lg:p-8">
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
           <ThemeToggle />
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
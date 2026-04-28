"use client";
import { Brain, ChevronRight, CloudUpload, FileQuestion, Rocket } from "lucide-react";

const steps = [
  {
    title: "Upload your content",
    icon: CloudUpload,
  },
  {
    title: "Train your AI",
    icon: Brain,
  },
  {
    title: "Generate exams",
    icon: FileQuestion,
  },
  {
    title: "Learn faster and work smarter",
    icon: Rocket,
  },
];
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Process</p>
          <h2 className="font-heading flex items-center gap-10 text-3xl font-semibold text-foreground sm:text-4xl">
            Simple <ChevronRight /> Fast <ChevronRight /> Powerful.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative  border border-border/50 bg-background/95 p-7 shadow-md shadow-foreground/5 transition duration-300  hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/10"
              >
               <div className="flex size-12 shadow-inner items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-foreground"><step.icon size={24} /></div>
              <div className="flex items-center gap-3 py-2">
                <p className="font-medium text-foreground">{step?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

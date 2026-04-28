import { BarChart2, BrainCircuit, Clock, Lightbulb, NotebookText, Percent, Settings } from "lucide-react";

const reasons = [
  {
    title: "Specialized AI",
    description: "Models tuned for real education and professional workflows.",
    icon: BrainCircuit,
    bg: "bg-gray-900",
    border: "border-foreground/20",
    text: "text-foreground",
  },
  {
    title: "Faster Mastery",
    description: "Summaries, quizzes, and study plans in minutes.",
    icon: Clock,
    bg: "bg-gray-900",
    border: "border-foreground/20",
    text: "text-foreground",
  },
  {
    title: "Accurate Context",
    description: "Responses grounded in your PDFs and lecture notes.",
    icon: Percent,
    bg: "bg-gray-900",
    border: "border-foreground/20",
    text: "text-foreground",
  },
  {
    title: "Study-Ready",
    description: "Auto-generated exams and flashcards on demand.",
    icon:NotebookText ,
    bg: "bg-gray-900",
    border: "border-foreground/20",
    text: "text-foreground",
  },
  {
    title: "Always Updated",
    description: "Adaptive learning insights and continuous improvements.",
    icon: BarChart2,
    bg: "bg-gray-900",
    border: "border-foreground/20",
    text: "text-foreground",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Why Choose Us</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Why Users Choose Our Platform
          </h2>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-14">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="w-full max-w-[460px] pl-[2.75rem] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div
                className={`relative flex min-h-[160px] w-full items-center rounded border-[2px] bg-background py-6 pr-8 pl-16 transition-transform duration-300  ${reason.border}`}
              >
                {/* Right accent line */}
                <div
                  className={`absolute right-[-2px] top-[20%] bottom-[20%] w-[4px] rounded-full ${reason.bg}`}
                />

                {/* Left mask overlay - exactly hides the main card border line on the left */}
                <div className="absolute left-[-2.5px] top-[15%] bottom-[15%] w-[5px] bg-background" />

                {/* Icon left assembly - Center sits perfectly on the left border edge */}
                <div className="absolute left-[calc(-2.75rem)] top-1/2 flex h-[5.5rem] w-[5.5rem] -translate-y-1/2 items-center justify-center bg-background">
                  {/* Outer frame brackets */}
                  <div
                    className={`absolute inset-0  border-[2px] ${reason.border}`}
                  />
                  
                  {/* Mask top and bottom to create the separate "( )" brackets */}
                  <div className="absolute top-[-3px] left-1/2 h-[8px] w-[55%] -translate-x-1/2 bg-background" />
                  <div className="absolute bottom-[-3px] left-1/2 h-[8px] w-[55%] -translate-x-1/2 bg-background" />

                  {/* Inner solid icon box */}
                  <div
                    className={`relative z-10 flex size-[3.5rem] items-center justify-center dark:text-white dark:border  text-background shadow-[3px_4px_10px_rgba(0,0,0,0.2)] dark:shadow-[3px_4px_10px_rgba(0,0,0,0.5)] ${reason.bg}`}
                  >
                    <reason.icon className="size-[26px]" />
                  </div>
                </div>

                {/* Text content area */}
                <div className="flex w-full flex-col gap-2 text-center">
                  <h3 className={`text-xl font-bold uppercase ${reason.text}`}>
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

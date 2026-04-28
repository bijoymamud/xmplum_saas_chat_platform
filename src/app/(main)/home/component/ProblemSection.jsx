import { ChevronRight, Gavel, GraduationCap, User } from "lucide-react";

const painPoints = [
  {
    title: "Students",
    icon: GraduationCap,
    items: [
      "Too many lecture slides to organize",
      "Hard to summarize dense notes",
      "Exam prep takes too much time",
    ],
  },
  {
    title: "Lawyers",
    icon: Gavel,
    items: [
      "Instant legal references are difficult",
      "Case law research is time-consuming",
      "Court prep needs fast decisions",
    ],
  },
  {
    title: "General Users",
    icon: User,
    items: [
      "Generic AI tools feel shallow",
      "No context on your documents",
      "Productivity stays fragmented",
    ],
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Problem</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Why Traditional Learning &amp; Workflows Are Broken
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative  border border-border/50 bg-background/95 p-7 shadow-md shadow-foreground/5 transition duration-300  hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/10"
            >
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shadow-inner items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-foreground">
                    <point.icon className="size-6" />
                  </span>
                  <h3 className="font-heading capitalize text-xl font-semibold text-foreground">
                    {point.title} Face
                  </h3>
                </div>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  {point.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ChevronRight size={18} className="text-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { QrCode } from "lucide-react";

const assistants = [
  {
    label: "Student AI Assistant",
    highlight: "Most Popular",
    description:
      "Turn lectures, notes, and PDFs into instant mastery with guided learning.",
    features: [
      "Upload PDF / Lecture Slides",
      "Instant Summarization",
      "Smart Topic Explanation",
      "Auto-generated Exams",
      "Quiz & Practice Mode",
      "Personalized Study Assistant",
    ],
  },
  {
    label: "Lawyer AI Assistant",
    highlight: "Premium",
    description:
      "Accelerate legal research and court preparation with contextual reasoning.",
    features: [
      "Legal Case Summarization",
      "Instant Law Suggestions",
      "Court Preparation Help",
      "Legal Defense Recommendations",
      "Smart Legal Research",
    ],
  },
  {
    label: "General AI Assistant",
    highlight: "Everyday",
    description:
      "Stay productive with an AI partner that learns your workflow and context.",
    features: [
      "Smart Daily Conversations",
      "Writing Assistance",
      "Research Help",
      "Productivity Support",
      "Advanced Chat Experience",
    ],
  },
];

export default function AssistantsSection() {
  return (
    <section id="assistants" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Solution</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            One Platform. Multiple AI Assistants.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <div
              key={assistant.label}
              className="group relative  border border-border/50 bg-background/95 p-7 shadow-md shadow-foreground/5 transition duration-300  hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {assistant.label}
                </h3>
                <span className="rounded-full bg-primary/5 px-3 py-1.5 shadow-inner text-sm font-medium text-primary">
                  {assistant.highlight}
                </span>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                {assistant.description}
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
                  {assistant.features.map((feature) => (  
                  <li key={feature} className="flex items-center gap-2">
                    <span><QrCode size={16} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CornerDownRight } from "lucide-react";

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Best for trying the student assistant.",
    features: [
      "Limited uploads",
      "Basic summaries",
      "Community support",
    ],
  },
  {
    name: "Pro Student",
    price: "$14/mo",
    description: "Full student AI with exams and quizzes.",
    features: [
      "Unlimited lecture uploads",
      "Exam generator",
      "Practice mode",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Professional Legal",
    price: "$49/mo",
    description: "Premium legal research and court prep.",
    features: [
      "Legal assistant",
      "Case law referencing",
      "Court prep toolkit",
      "Secure workspace",
    ],
  },
  {
    name: "Enterprise",
    price: "Let us talk",
    description: "Custom workflows for institutions.",
    features: [
      "Team workspaces",
      "Dedicated success",
      "Custom models",
      "SLA and compliance",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Pricing</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Flexible Plans for Everyone
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {pricing.map((plan) => (
           <div
  key={plan.name}
  className={`group relative flex h-full flex-col border border-border/80 bg-background/95 p-6 shadow-lg shadow-foreground/5 transition duration-300 hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/10 ${
    plan.highlight ? "ring-2 ring-primary/60" : ""
  }`}
>
  {plan.highlight && (
    <span className="absolute -top-4.5 left-4 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
      Best Value
    </span>
  )}

  <p className="text-sm uppercase tracking-[0.2em] mt-5  text-muted-foreground">
    {plan.name}
  </p>

  <p className="mt-4 font-heading text-4xl font-semibold text-foreground">
    {plan.price}
  </p>

  <p className="mt-2 text-lg text-muted-foreground">
    {plan.description}
  </p>

  <ul className="mt-6 flex-1 space-y-3 text-lg text-muted-foreground">
    {plan.features.map((feature) => (
      <li key={feature} className="flex items-center gap-2">
        <CornerDownRight size={16} />
        {feature}
      </li>
    ))}
  </ul>

  <button className="mt-8 w-full rounded-md hover:cursor-pointer bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:translate-y-[-1px] hover:bg-primary/90">
    Choose Plan
  </button>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

const comparisonRows = [
  { feature: "PDF-based learning", us: "Yes", generic: "Limited" },
  { feature: "Personalized exam generation", us: "Yes", generic: "No" },
  { feature: "Legal case support", us: "Yes", generic: "No" },
  { feature: "Context-aware responses", us: "Yes", generic: "Partial" },
  { feature: "Specialized AI models", us: "Yes", generic: "No" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Comparison</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Why We're Better Than Traditional AI Tools
          </h2>
        </div>
        <div className="mt-10 overflow-hidden  border border-border/80 bg-background/95 shadow-lg shadow-foreground/5">
          <div className="grid grid-cols-3 border-b border-border/60 text-lg font-semibold text-foreground">
            <div className="p-4">Features</div>
            <div className="p-4 text-center">Our Platform</div>
            <div className="p-4 text-center">Generic AI Tools</div>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 items-center border-b border-border/60 text-lg text-muted-foreground last:border-b-0"
            >
              <div className="p-4 font-medium text-foreground">{row.feature}</div>
              <div className="p-4 text-center text-emerald-500">{row.us}</div>
              <div className="p-4 text-center text-rose-500">{row.generic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

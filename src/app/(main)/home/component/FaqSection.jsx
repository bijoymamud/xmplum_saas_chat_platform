const faqs = [
  {
    question: "Is my uploaded PDF secure?",
    answer:
      "Yes. Documents are encrypted at rest and access is restricted to your workspace.",
  },
  {
    question: "Can I generate exams from any lecture?",
    answer:
      "Yes. Upload slides or notes and generate practice tests instantly.",
  },
  {
    question: "Does Lawyer AI provide real legal references?",
    answer:
      "It provides contextual summaries and reference prompts for legal research workflows.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes. Start on the free plan and upgrade anytime.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely. The dashboard is fully responsive.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">FAQ</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Answers to Common Questions
          </h2>
        </div>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group relative rounded-3xl border border-border/50 bg-background/95 p-6 text-lg text-muted-foreground shadow-lg shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/10"
            >
              <summary className="cursor-pointer font-medium text-foreground">
                {faq.question}
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

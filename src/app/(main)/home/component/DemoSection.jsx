export default function DemoSection() {
  return (
    <section id="demo" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Interactive Demo</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Test the Chatbot Instantly
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Try a quick prompt and see how Xmplum interprets your documents with context. Students get learning explanations, while professionals receive structured guidance.
            </p>
            <div className="flex gap-3">
              <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:translate-y-[-1px] hover:bg-primary/90">
                Start Free Today
              </button>
              <button className="rounded-md border border-border/70 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-foreground/40">
                Book a Walkthrough
              </button>
            </div>
          </div>
          <div className="group relative rounded-3xl border border-border/50 bg-background/95 p-6 shadow-lg shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/10">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-lg text-muted-foreground">
                <p className="text-xs uppercase text-muted-foreground">You</p>
                <p className="mt-2 text-foreground">Summarize this lecture and build a 5-question quiz.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4 text-lg text-muted-foreground">
                <p className="text-xs uppercase text-muted-foreground">Xmplum AI</p>
                <p className="mt-2 text-foreground">
                  Here is a concise summary plus five multiple-choice questions with answer keys.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-3">
                <input
                  type="text"
                  placeholder="Try asking about your lecture..."
                  className="w-full bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Demo prompt"
                />
                <button className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

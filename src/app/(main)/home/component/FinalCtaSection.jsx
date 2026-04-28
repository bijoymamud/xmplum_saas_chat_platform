export default function FinalCtaSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="group relative rounded-3xl border border-border/50 bg-background/95 p-10 shadow-lg shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest opacity-70">Final CTA</p>
              <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                Ready to Study Smarter &amp; Work Faster?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join the future of AI-powered education and professional assistance. Start with the student assistant and scale into advanced legal workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:translate-y-[-1px] hover:bg-primary/90">
                  Start Free Today
                </button>
                <button className="rounded-xl border border-border/70 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-foreground/40">
                  Talk to Sales
                </button>
              </div>
            </div>
            <div id="contact" className="rounded-2xl border border-border/60 bg-muted/40 p-6 text-lg text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
              <p className="mt-3 text-foreground">hello@xmplum.ai</p>
              <p className="mt-2">Schedule a guided onboarding for teams and institutions.</p>
              <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-4">
                <p className="text-xs text-muted-foreground">Security First</p>
                <p className="mt-2 text-foreground">
                  Private document handling with encrypted storage and permissioned access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

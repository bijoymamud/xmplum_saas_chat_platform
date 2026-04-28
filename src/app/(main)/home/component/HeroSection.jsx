import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 shadow-inner font-semibold text-sm uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              Premium AI SaaS Platform
            </div>
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
                AI-Powered Learning &amp; Professional Assistance Platform
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Upload lectures, notes, and PDFs. Xmplum summarizes, teaches, tests, and guides you with specialized AI for students, lawyers, and everyday professionals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/chat" 
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:translate-y-[-1px] hover:bg-primary/90"
              >   
                Start Free Trial
              </Link>
              <button className="rounded-md border border-border/70 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-foreground/40">
                Watch Demo
              </button>
            </div>
            {/* <div className="flex items-center gap-4 text-base text-muted-foreground">
              <span className="text-lg">Trusted by Students, Professionals &amp; Future Innovators</span>
              <div className="flex items-center gap-3">
                <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jahangirnagar_University_Logo.svg/1280px-Jahangirnagar_University_Logo.svg.png" alt="" width={70} height={55} />
               
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative rounded-[28px] border border-border/60 bg-background/70 p-4 shadow-2xl shadow-foreground/5 backdrop-blur">
              <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-400" />
                  <span className="size-2 rounded-full bg-amber-400" />
                  <span className="size-2 rounded-full bg-emerald-400" />
                </div>
                <span>Student Workspace</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-500">
                  Live
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Xmplum Student AI</p>
                    <p className="text-xs text-muted-foreground">Personalized learning companion</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Focus Mode</span>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            AI
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Study Chat</p>
                            <p className="text-[11px] text-muted-foreground">Student assistant</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-500">
                          Online
                        </span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <div>
                            <div className="rounded-l-2xl rounded-b-2xl bg-primary/10 px-4 py-3 text-foreground">
                              I uploaded my PDF. Please summarize this.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-end gap-3">
                          <div>
                            <div className="rounded-r-2xl rounded-b-2xl bg-blue-500/10 px-4 py-3 text-foreground">
                              Summary: The lecture covers memory formation, spaced repetition, and practical study loops to improve retention.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 ">
                          <div className="rounded-l-2xl rounded-b-2xl bg-primary/10 px-4 py-3 text-foreground">
                            Can you generate 12 questions from this PDF?
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                          <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">
                            Create 12-question quiz
                          </span>
                          <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">
                            Expand summary
                          </span>
                          <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">
                            Create flashcards
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-3 py-2 text-xs text-muted-foreground">
                      <span>Ask anything or paste a paragraph...</span>
                      <div className="ml-auto rounded-xl bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                        Send
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                      <p className="text-xs uppercase text-muted-foreground">Student highlights</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-foreground">
                          Instant summaries
                        </span>
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-foreground">
                          Auto exams
                        </span>
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-foreground">
                          Quiz mode
                        </span>
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-foreground">
                          Smart explanations
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                      <p className="text-xs text-muted-foreground">Quiz Mode</p>
                      <p className="mt-2 text-sm font-medium text-foreground">12 questions ready</p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                      <p className="text-xs text-muted-foreground">Study Plan</p>
                      <p className="mt-2 text-sm font-medium text-foreground">4-day sprint</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-mid absolute -right-20 -bottom-20 hidden w-56 rounded-[24px] border border-border/60 bg-background/80 p-3 shadow-lg shadow-foreground/5 backdrop-blur lg:block">
              <div className="rounded-[20px] border border-border/60 bg-background/70 p-3">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>Phone View</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-500">Live</span>
                </div>
                <div className="mt-3 space-y-2 text-[11px]">
                  <div className="rounded-2xl bg-primary/10 px-3 py-2 text-foreground">
                    Explain chapter 4.
                  </div>
                  <div className="rounded-2xl bg-muted/60 px-3 py-2 text-foreground">
                    Quick summary ready + quiz.
                  </div>
                </div>
              </div>
            </div>

            <div className="float-slow absolute -left-10 -top-10 hidden rounded-2xl border border-border/60 bg-background p-4 shadow-xl shadow-foreground/10 lg:block">
              <p className="text-xs text-muted-foreground">Lecture Insight</p>
              <p className="mt-2 text-sm text-foreground">Summary, key terms, and 3-minute review ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

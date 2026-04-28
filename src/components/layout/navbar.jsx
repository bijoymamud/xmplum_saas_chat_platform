import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const navLinks = [
  { href: "/#assistants", label: "Assistants" },
  { href: "/#comparison", label: "Comparison" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#demo", label: "Live Demo" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center px-6">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 mr-8">
          <Image
            src="https://i.ibb.co.com/7JTGSGZC/Dark-logo.png"
            alt="Xmplum AI"
            width={52}
            height={42}
            unoptimized
          />
        </Link>

        {/* Desktop Nav — pill */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-muted/30 px-2 py-1.5 shadow-inner backdrop-blur-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative rounded-full px-4 py-1.5 text-sm font-medium text-foreground/55 transition-all duration-200 hover:bg-background/70 hover:text-foreground hover:shadow-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile logo text fallback */}
        <div className="flex md:hidden flex-1 items-center justify-start">
          <Link href="/" className="font-heading font-semibold text-base tracking-tight">
            Xmplum AI
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />

          {/* Log in — ghost style */}
          <Link href="/login" className="hidden sm:block">
            <button className="rounded-full px-5 py-2 text-sm font-semibold text-foreground/60 transition-all duration-200 hover:bg-muted/60 hover:text-foreground">
              Log in
            </button>
          </Link>

          {/* Sign up — primary glow CTA */}
          <Link href="/signup">
            <button className="relative inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-px active:scale-95">
              Sign up
              <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}

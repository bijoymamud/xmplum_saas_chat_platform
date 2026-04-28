import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 font-heading font-semibold text-2xl mb-4">
              Xmplum AI
            </Link>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              An AI learning and professional assistance platform for students, legal teams, and modern knowledge workers.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Product</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <Link href="/#assistants" className="hover:text-foreground transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-foreground transition-colors">Live Demo</Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-foreground transition-colors">Why Xmplum</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Company</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <Link href="/#about" className="hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#trust" className="hover:text-foreground transition-colors">Trust</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">Legal</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Xmplum AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

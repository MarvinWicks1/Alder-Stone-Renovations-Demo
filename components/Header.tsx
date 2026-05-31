import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft-taupe/70 bg-warm-stone/95 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="group inline-flex flex-col"
          aria-label="Alder & Stone home"
        >
          <span className="font-heading text-xl font-semibold tracking-[-0.04em] text-charcoal">
            Alder & Stone
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-muted-slate">
            Renovations demo
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-sm font-medium text-muted-slate lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:bg-bronze"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}

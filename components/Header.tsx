import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft-taupe/70 bg-warm-stone/90 backdrop-blur-xl">
      <div className="container-shell flex min-h-24 items-center justify-between gap-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Alder & Stone Renovations home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-bronze/25 bg-charcoal font-heading text-lg font-semibold text-white shadow-lg shadow-charcoal/10">
            A&S
          </span>
          <span className="min-w-0 flex-col sm:inline-flex">
            <span className="truncate font-heading text-base font-semibold tracking-[-0.045em] text-charcoal sm:text-xl">
              Alder & Stone Renovations
            </span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.24em] text-muted-slate sm:block">
              {siteConfig.strapline}
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold text-charcoal/70 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-bronze">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="shrink-0 rounded-full bg-bronze px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-bronze/20 transition hover:bg-charcoal sm:px-5 sm:text-sm">
          <span className="sm:hidden">Project visit</span>
          <span className="hidden sm:inline">Request a project visit</span>
        </Link>
      </div>
    </header>
  );
}

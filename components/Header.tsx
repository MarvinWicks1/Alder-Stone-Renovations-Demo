import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-warm-stone/95 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Alder & Stone Renovations home"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-bronze/40 bg-charcoal font-heading text-xl font-bold italic text-white shadow-lg shadow-charcoal/10">
              A
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-2xl font-bold leading-none tracking-[-0.035em] text-charcoal sm:text-3xl">
                Alder & Stone
              </span>
              <span className="block truncate text-[0.64rem] uppercase tracking-[0.26em] text-muted-slate sm:text-[0.68rem]">
                {siteConfig.strapline}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-sm font-semibold text-charcoal/75 lg:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 transition hover:text-bronze"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="shrink-0 rounded-none bg-bronze px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-bronze/20 transition hover:bg-charcoal"
            >
              Request a project visit
            </Link>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 border border-charcoal/15 bg-white/75 px-4 py-3 text-sm font-semibold text-charcoal shadow-sm marker:hidden [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
              <span className="relative h-3 w-4" aria-hidden="true">
                <span className="absolute left-0 top-0 h-0.5 w-4 bg-charcoal transition group-open:top-1.5 group-open:rotate-45" />
                <span className="absolute bottom-0 left-0 h-0.5 w-4 bg-charcoal transition group-open:bottom-1 group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] border border-soft-taupe bg-white p-3 shadow-2xl shadow-charcoal/15">
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-soft-taupe/70 px-4 py-3 text-base font-semibold text-charcoal last:border-b-0 hover:bg-warm-stone hover:text-bronze"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="mt-3 flex justify-center bg-bronze px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
              >
                Request a project visit
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

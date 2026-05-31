import Link from "next/link";
import { accreditationPlaceholders, siteConfig } from "@/lib/site";

const accreditationPlaceholders = ["FMB", "TrustMark", "Insurance"];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_0.9fr]">
        <div>
          <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
            Alder & Stone Renovations
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-soft-taupe">
            {siteConfig.strapline}
          </p>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
            Demo website concept by VCUK Web Services for a fictional premium Cheshire renovation company. The site is an example layout only and does not present real reviews, awards, certifications or client projects.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">Links</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">Demo contact</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.area}</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
            Verified proof
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {accreditationPlaceholders.map((logo) => (
              <span
                key={logo}
                className="border border-white/15 px-3 py-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/65"
              >
                {logo}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-white/55">
            Placeholder logo positions only; live sites should show verified
            memberships and guarantees.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © 2026 Alder & Stone Renovations demo concept by VCUK Web Services.
      </div>
    </footer>
  );
}

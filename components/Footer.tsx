import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-heading text-2xl font-semibold tracking-[-0.04em]">
            Alder & Stone Renovations
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            A fictional demo website concept by VCUK Web Services for a premium
            Cheshire renovation company. No real-client claims, testimonials,
            awards or accreditations are implied.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
            Pages
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
            Demo contact
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.area}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © 2026 VCUK Web Services demo concept. This website is for demonstration
        only.
      </div>
    </footer>
  );
}

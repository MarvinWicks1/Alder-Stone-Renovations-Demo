import Link from "next/link";

export function Hero() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bronze">
            Premium renovation website demo
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold tracking-[-0.06em] text-charcoal md:text-7xl">
            Calm, considered renovation concepts for Cheshire homes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-slate">
            Alder & Stone Renovations is a fictional example brand showing how a
            local renovation company could present kitchens, bathrooms,
            refurbishments and garage conversions with clarity and confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="rounded-full bg-charcoal px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-bronze"
            >
              Explore services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-soft-taupe bg-white px-7 py-4 text-center text-sm font-semibold text-charcoal transition hover:border-bronze hover:text-bronze"
            >
              View demo enquiry
            </Link>
          </div>
        </div>
        <div className="premium-card relative min-h-[520px] overflow-hidden rounded-[2rem] bg-soft-taupe p-6">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,32,40,0.08),rgba(138,111,60,0.16)),radial-gradient(circle_at_25%_20%,#ffffff_0,transparent_32%)]" />
          <div className="relative flex h-full min-h-[472px] flex-col justify-between rounded-[1.5rem] border border-white/60 bg-white/55 p-6 backdrop-blur-sm">
            <span className="w-fit rounded-full bg-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Image placeholder
            </span>
            <div>
              <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
                Editorial project card
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-slate">
                Replace this premium placeholder with real project photography
                when adapting the concept for a genuine trades business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const trustPoints = [
  "Detailed written quotes",
  "Project-managed renovations",
  "Clean, respectful work",
  "Local Cheshire team",
];

export function Hero() {
  return (
    <section className="overflow-hidden pb-14 pt-12 md:pb-24 md:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="w-fit rounded-full border border-bronze/25 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
            Demo website concept by VCUK Web Services
          </p>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.07em] text-charcoal md:text-7xl">
            Premium kitchens, bathrooms and home renovations across Cheshire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-slate">
            Alder & Stone Renovations is a demo website concept for a local renovation company specialising in carefully managed, high-quality home improvement projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-bronze px-7 py-4 text-center text-sm font-semibold text-white shadow-xl shadow-bronze/20 transition hover:bg-charcoal">
              Request a project visit
            </Link>
            <Link href="/projects" className="rounded-full border border-soft-taupe bg-white/80 px-7 py-4 text-center text-sm font-semibold text-charcoal transition hover:border-bronze hover:text-bronze">
              View recent projects
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Trust points">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-semibold text-charcoal">
                <span className="h-2 w-2 rounded-full bg-bronze" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-bronze/15 blur-3xl" />
          <div className="premium-card relative overflow-hidden rounded-[2.25rem] p-4">
            <div className="blueprint-panel min-h-[560px] overflow-hidden rounded-[1.75rem] p-5 text-white">
              <div className="grid h-full min-h-[520px] grid-rows-[auto_1fr_auto] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    Project preview
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">Cheshire</span>
                </div>
                <div className="my-8 grid gap-4 self-center">
                  <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
                    <div className="material-swatch h-52 rounded-3xl border border-white/20" aria-hidden="true" />
                    <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                      <div className="h-16 rounded-2xl bg-white/15" />
                      <div className="mt-4 h-28 rounded-2xl bg-bronze/40" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-28 rounded-3xl border border-white/20 bg-white/10" />
                    <div className="h-28 rounded-3xl border border-white/20 bg-white/15" />
                    <div className="h-28 rounded-3xl border border-white/20 bg-bronze/35" />
                  </div>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
                    Kitchen, bathroom and refurbishment image placeholder
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    A styled visual area for real project photography, material details or before-and-after imagery on a live client website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

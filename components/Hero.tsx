import Link from "next/link";

const trustPoints = [
  "Detailed written quotes",
  "Project-managed renovations",
  "Clean, respectful work",
  "Local Cheshire team",
];

export function Hero() {
  return (
    <section className="reveal-on-scroll overflow-hidden pb-14 pt-12 md:pb-24 md:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="w-fit rounded-none border border-bronze/25 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
            Demo website concept by VCUK Web Services
          </p>
          <h1 className="mt-6 max-w-4xl font-heading text-6xl font-bold leading-[0.88] tracking-[-0.04em] text-charcoal md:text-8xl">
            Craft-led kitchens, bathrooms and considered renovations across
            Cheshire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-slate">
            Alder & Stone Renovations is a fictional demo concept shaped around
            material detail, careful sequencing and premium renovation enquiries
            for Cheshire homes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-none bg-bronze px-7 py-4 text-center text-sm font-semibold text-white shadow-xl shadow-bronze/20 transition hover:bg-charcoal"
            >
              Request a project visit
            </Link>
            <Link
              href="/projects"
              className="rounded-none border border-soft-taupe bg-white/80 px-7 py-4 text-center text-sm font-semibold text-charcoal transition hover:border-bronze hover:text-bronze"
            >
              View recent projects
            </Link>
          </div>
          <ul
            className="mt-10 grid gap-3 sm:grid-cols-2"
            aria-label="Trust points"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-semibold text-charcoal"
              >
                <span className="h-2 w-2 rounded-none bg-bronze" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-none bg-bronze/15 blur-3xl" />
          <div className="premium-card relative overflow-hidden rounded-sm p-4">
            <div className="blueprint-panel min-h-[560px] overflow-hidden rounded-sm p-5 text-white">
              <div className="grid h-full min-h-[520px] grid-rows-[auto_1fr_auto] rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-none bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    Project preview
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Cheshire
                  </span>
                </div>
                <div className="my-8 grid gap-4 self-center">
                  <div className="relative min-h-80 overflow-hidden rounded-sm border border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
                      alt="Stock photo of a premium open-plan renovated kitchen and living space"
                      width={1400}
                      height={1000}
                      className="h-full min-h-80 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 border border-white/30 bg-charcoal/75 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                      Curated stock imagery
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className="material-swatch h-24 rounded-sm border border-white/20"
                      aria-hidden="true"
                    />
                    <div className="h-24 rounded-sm border border-white/20 bg-white/15" />
                    <div className="h-24 rounded-sm border border-white/20 bg-bronze/35" />
                  </div>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
                    Stock imagery treatment for a real project gallery
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    Relevant stock photography is used here to show how the live
                    project gallery would feel once replaced with genuine client
                    images.
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

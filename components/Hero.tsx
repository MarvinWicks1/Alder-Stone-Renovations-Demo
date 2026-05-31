import Link from "next/link";

const trustPoints = [
  "Written quotes before work starts",
  "Planned room-by-room projects",
  "Tidy, respectful working habits",
  "Cheshire and nearby areas",
];

export function Hero() {
  return (
    <section className="overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="w-fit border border-olive/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-olive">
              Demo website concept by VCUK Web Services
            </p>
            <span className="hidden h-px w-24 bg-olive/35 sm:block" aria-hidden="true" />
          </div>
          <h1 className="mt-7 max-w-4xl font-heading text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-charcoal sm:text-6xl md:text-8xl">
            Kitchens, bathrooms and renovations with a calmer finish.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-slate">
            Thoughtful renovation work for Cheshire homes, with clear quotes, careful planning and a finish that suits the way you actually live.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="bg-olive px-7 py-4 text-center text-sm font-semibold text-white shadow-xl shadow-olive/20 transition hover:-translate-y-0.5 hover:bg-charcoal"
            >
              Request a project visit
            </Link>
            <Link
              href="/projects"
              className="border border-soft-taupe bg-white/80 px-7 py-4 text-center text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:border-olive hover:text-olive"
            >
              View recent projects
            </Link>
          </div>
          <ul
            className="mt-10 grid gap-3 border-l border-olive/30 pl-5 sm:grid-cols-2"
            aria-label="Trust points"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-semibold text-charcoal"
              >
                <span className="h-2 w-2 bg-olive" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-44 w-44 bg-olive/15 blur-3xl" aria-hidden="true" />
          <div className="premium-card relative overflow-hidden p-4">
            <div className="blueprint-panel min-h-[560px] overflow-hidden p-5 text-white">
              <div className="grid h-full min-h-[520px] grid-rows-[auto_1fr_auto] border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    Kitchen refit
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                    Cheshire
                  </span>
                </div>
                <div className="my-8 grid gap-4 self-center">
                  <div className="grid grid-cols-[1.05fr_0.95fr] gap-4">
                    <div
                      className="material-swatch h-56 border border-white/20"
                      aria-hidden="true"
                    />
                    <div className="border border-white/20 bg-white/10 p-4">
                      <div className="h-16 bg-white/15" />
                      <div className="mt-4 h-32 bg-olive/45" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-28 border border-white/20 bg-white/10" />
                    <div className="h-28 border border-white/20 bg-white/15" />
                    <div className="h-28 border border-white/20 bg-sage/35" />
                  </div>
                  <div className="editorial-rule" />
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
                    Natural materials, better storage and softer lighting.
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    A visual area like this can show the quality of the finish before a visitor reads through the details.
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

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
            <div className="relative min-h-[560px] overflow-hidden bg-charcoal text-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Calm renovated home interior with warm materials and natural light"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/88 via-charcoal/28 to-charcoal/10" />
              <div className="relative grid min-h-[560px] grid-rows-[auto_1fr_auto] border border-white/15 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    Kitchen refit
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/72">
                    Cheshire
                  </span>
                </div>
                <div className="my-8 self-center">
                  <div className="max-w-sm border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                      Featured visual
                    </p>
                    <p className="mt-3 font-heading text-4xl font-semibold leading-none tracking-[-0.05em]">
                      Natural materials, better storage and softer lighting.
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-sm leading-6 text-white/75">
                  A premium homepage needs a strong image-led first impression, especially for renovation and home improvement work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

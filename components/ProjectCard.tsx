type ProjectCardProps = {
  title: string;
  type: string;
  location: string;
  description: string;
  features?: string[];
  palette?: string;
};

export function ProjectCard({ title, type, location, description, features = [], palette = "from-soft-taupe via-warm-stone to-bronze/60" }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-soft-taupe bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal/10">
      <div className={`relative flex h-72 items-end overflow-hidden bg-gradient-to-br ${palette} p-5`}>
        <div className="absolute inset-4 rounded-[1.5rem] border border-white/40" />
        <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
        <div className="relative w-full rounded-[1.35rem] border border-white/45 bg-white/70 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
            <span>{type}</span>
            <span>{location}</span>
          </div>
          <p className="mt-4 font-heading text-2xl font-semibold tracking-[-0.05em] text-charcoal">
            Premium image placeholder
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
          Fictional example project
        </p>
        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.045em] text-charcoal">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
        {features.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span key={feature} className="rounded-full bg-warm-stone px-3 py-1 text-xs font-semibold text-charcoal/75">
                {feature}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

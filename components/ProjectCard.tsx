export function ProjectCard({
  title,
  type,
  location,
  description,
}: {
  title: string;
  type: string;
  location: string;
  description: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-soft-taupe bg-white">
      <div className="flex h-56 items-end bg-[linear-gradient(135deg,#D8D0C4,#F6F2EA_48%,#8A6F3C)] p-5">
        <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
          Demo visual
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
          <span>{type}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-charcoal">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-slate">
          Fictional example project
        </p>
      </div>
    </article>
  );
}

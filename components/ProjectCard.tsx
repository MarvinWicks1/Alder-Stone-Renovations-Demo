type ProjectCardProps = {
  title: string;
  type: string;
  location: string;
  description: string;
  features?: string[];
  palette?: string;
};

export function ProjectCard({
  title,
  type,
  location,
  description,
  features = [],
  palette = "from-limestone via-warm-stone to-olive/60",
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden border border-soft-taupe bg-white shadow-fine transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${palette}`}>
        <div className="absolute inset-0 opacity-65 [background-image:linear-gradient(90deg,rgba(21,26,24,.12)_1px,transparent_1px),linear-gradient(rgba(21,26,24,.10)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="absolute left-7 top-7 h-36 w-[68%] border border-white/60 bg-white/35 shadow-2xl shadow-charcoal/10 backdrop-blur-sm" />
        <div className="absolute bottom-7 left-7 right-7 border border-white/55 bg-charcoal/88 p-5 text-white backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            <span>{type}</span>
            <span>{location}</span>
          </div>
          <p className="mt-4 font-heading text-3xl font-bold leading-none tracking-[-0.035em]">
            Project study placeholder
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-olive">
          Fictional example project
        </p>
        <h3 className="mt-3 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-muted-slate">{description}</p>
        {features.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="border border-soft-taupe bg-warm-stone px-3 py-2 text-xs font-semibold text-charcoal/75"
              >
                {feature}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

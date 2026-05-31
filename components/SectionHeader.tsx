export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-bronze">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.05em] text-charcoal md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-slate">
          {description}
        </p>
      ) : null}
    </div>
  );
}

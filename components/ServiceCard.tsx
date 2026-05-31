export function ServiceCard({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details?: string;
}) {
  return (
    <article className="premium-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-bronze/50">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze/10 text-lg font-semibold text-bronze">
        ✦
      </div>
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
      {details ? (
        <p className="mt-4 border-t border-soft-taupe pt-4 text-sm leading-6 text-charcoal/75">
          {details}
        </p>
      ) : null}
    </article>
  );
}

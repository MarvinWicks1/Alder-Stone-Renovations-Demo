export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <div className={align === "center" ? "mx-auto mb-5 h-px w-24 bg-olive/40" : "mb-5 h-px w-24 bg-olive/40"} aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-olive">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-4xl font-bold leading-[0.98] tracking-[-0.035em] text-charcoal md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-slate md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

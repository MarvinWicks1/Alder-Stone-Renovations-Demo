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
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bronze">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-4xl font-bold leading-[0.95] tracking-[-0.035em] text-charcoal md:text-6xl">
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

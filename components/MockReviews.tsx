const proofPlaceholders = [
  {
    title: "Real homeowner reviews",
    text: "A live client site would show verified testimonials from actual customers, not invented quotes.",
  },
  {
    title: "Before and after photos",
    text: "Project proof can show the original space, the renovation process and the finished result.",
  },
  {
    title: "Verified trust signals",
    text: "Insurance, guarantees, trade memberships and qualifications should only be shown when supplied by the real business.",
  },
];

export function MockReviews() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {proofPlaceholders.map((item) => (
        <article
          key={item.title}
          className="border border-soft-taupe bg-white p-6 shadow-fine"
        >
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
            <span>Proof placeholder</span>
            <span aria-hidden="true">—</span>
          </div>
          <h3 className="mt-5 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-slate">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}

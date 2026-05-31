const cards = [
  [
    "Clear presentation",
    "The concept demonstrates plain-English service explanations, visible process steps and simple enquiry routes.",
  ],
  [
    "Premium positioning",
    "Warm colours, editorial spacing and careful typography help a trades brand feel established without using fake proof.",
  ],
  [
    "Demo-safe proof",
    "Placeholder proof sections are labelled as examples rather than invented reviews, awards or certifications.",
  ],
];

export function TrustCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map(([title, description]) => (
        <article key={title} className="rounded-3xl bg-charcoal p-6 text-white">
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em]">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/70">{description}</p>
        </article>
      ))}
    </div>
  );
}

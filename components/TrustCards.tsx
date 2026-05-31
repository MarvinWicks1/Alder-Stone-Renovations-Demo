import { trustCards } from "@/lib/site";

export function TrustCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {trustCards.map((card, index) => (
        <article key={card.title} className="rounded-[2rem] border border-soft-taupe bg-white/80 p-6 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">
            0{index + 1}
          </span>
          <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.045em] text-charcoal">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-muted-slate">{card.description}</p>
        </article>
      ))}
    </div>
  );
}

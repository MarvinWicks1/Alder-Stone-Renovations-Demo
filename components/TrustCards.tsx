import { trustCards } from "@/lib/site";

export function TrustCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {trustCards.map((card, index) => (
        <article
          key={card.title}
          className="border border-soft-taupe bg-white p-6 shadow-[0_16px_45px_rgba(24,32,40,0.06)]"
        >
          <span className="font-heading text-5xl font-semibold italic leading-none text-bronze/55">
            0{index + 1}
          </span>
          <h3 className="mt-6 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-muted-slate">
            {card.description}
          </p>
        </article>
      ))}
    </div>
  );
}

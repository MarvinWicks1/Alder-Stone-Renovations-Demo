import { mockReviews } from "@/lib/site";

export function MockReviews() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {mockReviews.map((review) => (
        <article
          key={`${review.project}-${review.location}`}
          className="border border-soft-taupe bg-white p-6 shadow-[0_16px_45px_rgba(24,32,40,0.06)]"
        >
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            <span>Mock review</span>
            <span aria-label="Example five star review">★★★★★</span>
          </div>
          <blockquote className="mt-5 text-sm leading-7 text-muted-slate">
            “{review.quote}”
          </blockquote>
          <div className="mt-6 border-t border-soft-taupe pt-4">
            <p className="font-heading text-2xl font-bold leading-none tracking-[-0.035em] text-charcoal">
              {review.name}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-slate">
              {review.project} · {review.location}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

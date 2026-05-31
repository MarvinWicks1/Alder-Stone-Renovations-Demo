import { sampleReviews } from "@/lib/site";

export function SampleReviews() {
  return (
    <section className="py-16" aria-labelledby="sample-reviews-title">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="border border-soft-taupe bg-charcoal p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sage">
              Sample review layout
            </p>
            <h2
              id="sample-reviews-title"
              className="mt-4 font-heading text-4xl font-bold leading-none tracking-[-0.045em] md:text-6xl"
            >
              Real client feedback would sit here.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              These are mock reviews for demo layout purposes only. A live client site should replace them with genuine, approved customer reviews.
            </p>
          </div>

          <div className="grid gap-5">
            {sampleReviews.map((review) => (
              <article
                key={review.name}
                className="border border-soft-taupe bg-white p-6 shadow-[0_18px_55px_rgba(24,32,40,0.08)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-2xl font-bold tracking-[-0.04em] text-charcoal">
                      {review.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
                      {review.project}
                    </p>
                  </div>
                  <div className="flex gap-1 text-bronze" aria-label="Five star sample rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} aria-hidden="true">★</span>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 text-base leading-8 text-muted-slate">
                  “{review.quote}”
                </blockquote>
                <p className="mt-5 border-t border-soft-taupe pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-slate">
                  Mock testimonial — demo content only
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

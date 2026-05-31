import {
  accreditationPlaceholders,
  liveProofItems,
  photographyWorkflow,
} from "@/lib/site";

export function PremiumProof() {
  return (
    <section
      className="reveal-on-scroll py-16 md:py-20"
      aria-labelledby="premium-proof-title"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="border border-soft-taupe bg-charcoal p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-soft-taupe">
            Premium proof system
          </p>
          <h2
            id="premium-proof-title"
            className="mt-4 font-heading text-4xl font-bold leading-[0.95] tracking-[-0.035em] md:text-6xl"
          >
            Authority should be visible before the enquiry.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/72">
            This demo does not invent reviews, memberships or awards. Instead,
            it shows the proof blocks a live premium renovation site should
            connect to verified sources.
          </p>
          <div
            className="mt-8 grid gap-3 sm:grid-cols-3"
            aria-label="Example accreditation logo positions"
          >
            {accreditationPlaceholders.map((logo) => (
              <div
                key={logo}
                className="border border-white/15 bg-white/5 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
              >
                {logo}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-white/55">
            Logo spaces are placeholders only. A real build would use verified
            trade memberships supplied by the client, such as FMB or TrustMark
            where applicable.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            {liveProofItems.map((item) => (
              <article
                key={item.title}
                className="border border-soft-taupe bg-white p-6 shadow-[0_16px_45px_rgba(24,32,40,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">
                  {item.label}
                </p>
                <h3 className="mt-4 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-slate">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <article className="border border-soft-taupe bg-warm-stone p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">
              Photography edit service
            </p>
            <h3 className="mt-4 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
              Make real project images feel cohesive.
            </h3>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {photographyWorkflow.map((step) => (
                <div
                  key={step}
                  className="border border-soft-taupe bg-white px-4 py-4 text-sm font-semibold text-charcoal/75"
                >
                  {step}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-slate">
              On a live client website, this area would explain how existing job
              photos are cropped, colour-balanced and sequenced so the whole
              project gallery feels premium rather than mismatched.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

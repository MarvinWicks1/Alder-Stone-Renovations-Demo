import { accreditationPlaceholders } from "@/lib/site";

const liveProofItems = [
  {
    label: "Reviews",
    title: "What customers say",
    description:
      "Short, specific reviews help people understand what the job was like, not just how it looked at the end.",
  },
  {
    label: "Project photos",
    title: "Before, during and after",
    description:
      "A good gallery shows the starting point, the messy middle and the finished room, with enough detail to be useful.",
  },
  {
    label: "Credentials",
    title: "Insurance and memberships",
    description:
      "If a business has trade memberships, guarantees or insurance details, they should be easy to find and kept accurate.",
  },
  {
    label: "Local fit",
    title: "Where the work happens",
    description:
      "Service areas and project types help visitors quickly work out whether it is worth getting in touch.",
  },
];

const photographyWorkflow = [
  "Crop consistently",
  "Balance colour",
  "Sequence clearly",
];

export function PremiumProof() {
  return (
    <section
      className="reveal-on-scroll py-16 md:py-20"
      aria-labelledby="premium-proof-title"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="border border-soft-taupe bg-charcoal p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sage">
            Trust signals
          </p>
          <h2
            id="premium-proof-title"
            className="mt-4 font-heading text-4xl font-bold leading-[0.95] tracking-[-0.035em] md:text-6xl"
          >
            People want proof before they ask for a quote.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/72">
            For a real renovation company, this is where genuine reviews, project photos and verified credentials would sit. This demo keeps those areas clearly labelled instead of making anything up.
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
            Placeholder positions only. A live site should use verified details supplied by the business.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            {liveProofItems.map((item) => (
              <article
                key={item.title}
                className="border border-soft-taupe bg-white p-6 shadow-fine"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-olive">
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-olive">
              Project photos
            </p>
            <h3 className="mt-4 font-heading text-3xl font-bold leading-none tracking-[-0.035em] text-charcoal">
              Make real job photos easier to follow.
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
              Even ordinary phone photos can work better when they are cropped consistently, ordered sensibly and given short captions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

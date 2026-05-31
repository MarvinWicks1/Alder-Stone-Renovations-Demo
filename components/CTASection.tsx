import Link from "next/link";

export function CTASection({
  title = "Ready to adapt this demo for a real renovation brand?",
}: {
  title?: string;
}) {
  return (
    <section className="py-16">
      <div className="container-shell rounded-[2rem] bg-charcoal p-8 text-center text-white md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-soft-taupe">
          Final call to action
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/70">
          This enquiry flow is frontend-only and intended for demonstration.
          VCUK Web Services can replace demo content with genuine business
          details, photography and compliant proof points.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-charcoal transition hover:bg-soft-taupe"
        >
          Open contact page
        </Link>
      </div>
    </section>
  );
}

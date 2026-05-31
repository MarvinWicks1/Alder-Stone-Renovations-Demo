import Link from "next/link";

export function CTASection({
  title = "Planning a kitchen, bathroom or home renovation?",
  copy = "Send a few details about your project and arrange an initial visit.",
  button = "Request a project visit",
}: {
  title?: string;
  copy?: string;
  button?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-shell overflow-hidden bg-charcoal text-white shadow-editorial">
        <div className="blueprint-panel px-6 py-12 text-center md:px-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sage">
            Project enquiry
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-[-0.055em] md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72">
            {copy}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-white px-7 py-4 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-limestone"
          >
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={compact ? "py-4" : "py-10"}
      aria-label="Demo website notice"
    >
      <div className="container-shell">
        <div className="rounded-3xl border border-bronze/30 bg-bronze/10 p-5 text-sm leading-6 text-charcoal md:flex md:items-center md:justify-between md:gap-6">
          <p>
            <strong>Demo concept:</strong> Alder & Stone Renovations is a
            fictional example brand created by VCUK Web Services to demonstrate
            a premium trades website. It does not represent a real renovation
            company, real clients, awards, certifications or reviews.
          </p>
          <span className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-bronze md:mt-0">
            Example site
          </span>
        </div>
      </div>
    </section>
  );
}

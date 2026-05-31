export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={compact ? "py-5" : "py-10"}
      aria-label="Demo website notice"
    >
      <div className="container-shell">
        <div className="rounded-sm border border-bronze/25 bg-white/70 px-5 py-4 text-sm leading-6 text-charcoal shadow-sm md:flex md:items-center md:justify-between md:gap-6">
          <p>
            <strong>Demo website concept by VCUK Web Services.</strong> Alder &
            Stone Renovations is fictional and used to show how a premium local
            trades website could look. No real reviews, awards, certifications
            or client claims are being presented.
          </p>
          <span className="mt-3 inline-flex rounded-none bg-warm-stone px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-bronze md:mt-0">
            Example concept
          </span>
        </div>
      </div>
    </section>
  );
}

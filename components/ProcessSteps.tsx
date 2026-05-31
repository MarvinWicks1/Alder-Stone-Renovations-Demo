type Step = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative grid gap-4">
      <div
        className="absolute bottom-8 left-6 top-8 hidden w-px bg-soft-taupe md:block"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="premium-card relative flex gap-5 rounded-sm p-5"
        >
          <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-charcoal text-sm font-semibold text-white shadow-lg shadow-charcoal/10">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold tracking-[-0.045em] text-charcoal">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-slate">
              {step.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

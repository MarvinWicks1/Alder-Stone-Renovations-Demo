export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <div key={step} className="premium-card flex gap-5 rounded-3xl p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold tracking-[-0.04em]">
              {step}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-slate">
              This demo step describes a clear homeowner experience without
              claiming real delivery history or client outcomes.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

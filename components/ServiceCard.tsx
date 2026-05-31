import Link from "next/link";

type ServiceCardProps = {
  title: string;
  intro: string;
  description: string;
  includes?: string[];
  cta?: string;
};

export function ServiceCard({ title, intro, description, includes = [], cta }: ServiceCardProps) {
  return (
    <article className="premium-card group flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:bg-white">
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-charcoal text-lg font-semibold text-white shadow-lg shadow-charcoal/10">
          {title.slice(0, 1)}
        </div>
        <span className="h-px flex-1 bg-soft-taupe" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Service</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.045em] text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-sm font-medium leading-6 text-charcoal/80">{intro}</p>
      <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
      {includes.length > 0 ? (
        <ul className="mt-5 grid gap-2 border-t border-soft-taupe pt-5 text-sm text-charcoal/75">
          {includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {cta ? (
        <Link href="/contact" className="mt-6 inline-flex w-fit rounded-full border border-soft-taupe px-5 py-3 text-sm font-semibold text-charcoal transition group-hover:border-bronze group-hover:text-bronze">
          {cta}
        </Link>
      ) : null}
    </article>
  );
}

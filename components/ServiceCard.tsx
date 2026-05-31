import Link from "next/link";

type ServiceCardProps = {
  title: string;
  intro: string;
  description: string;
  includes?: string[];
  cta?: string;
};

export function ServiceCard({
  title,
  intro,
  description,
  includes = [],
  cta,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col border border-soft-taupe bg-white shadow-[0_18px_55px_rgba(24,32,40,0.07)] transition duration-300 hover:-translate-y-1 hover:border-bronze/50">
      <div className="flex min-h-36 items-end justify-between gap-5 border-b border-soft-taupe bg-[linear-gradient(135deg,rgba(246,242,234,0.9),rgba(216,208,196,0.5))] p-6">
        <span className="max-w-[13rem] font-heading text-4xl font-bold leading-[0.9] tracking-[-0.035em] text-charcoal md:text-5xl">
          {title}
        </span>
        <span className="h-16 w-16 shrink-0 border border-bronze/35 bg-white/55 text-center font-heading text-5xl font-semibold italic leading-[3.8rem] text-bronze">
          {title.slice(0, 1)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold leading-6 text-charcoal">{intro}</p>
        <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
        {includes.length > 0 ? (
          <ul className="mt-6 grid gap-2 border-l border-bronze/30 pl-4 text-sm text-charcoal/75">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <Link
            href="/contact"
            className="mt-7 inline-flex w-fit border border-charcoal/15 px-5 py-3 text-sm font-semibold text-charcoal transition group-hover:border-bronze group-hover:bg-bronze group-hover:text-white"
          >
            {cta}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

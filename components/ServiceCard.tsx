import Link from "next/link";

type ServiceCardProps = {
  title: string;
  intro: string;
  description: string;
  includes?: string[];
  cta?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export function ServiceCard({
  title,
  intro,
  description,
  includes = [],
  cta,
  imageUrl,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-soft-taupe bg-white shadow-fine transition duration-300 hover:-translate-y-1 hover:border-olive/50 hover:shadow-editorial">
      <div className="relative h-56 overflow-hidden border-b border-soft-taupe bg-[linear-gradient(135deg,rgba(250,248,241,0.98),rgba(231,225,211,0.82))]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <span className="max-w-[14rem] font-heading text-4xl font-bold leading-[0.94] tracking-[-0.035em] text-white md:text-5xl">
            {title}
          </span>
          <span className="grid h-14 w-14 shrink-0 place-items-center border border-white/40 bg-white/85 font-heading text-4xl font-semibold italic text-olive">
            {title.slice(0, 1)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold leading-6 text-charcoal">{intro}</p>
        <p className="mt-3 text-sm leading-6 text-muted-slate">{description}</p>
        {includes.length > 0 ? (
          <ul className="mt-6 grid gap-2 border-l border-olive/35 pl-4 text-sm text-charcoal/75">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <Link
            href="/contact"
            className="mt-7 inline-flex w-fit border border-charcoal/15 px-5 py-3 text-sm font-semibold text-charcoal transition group-hover:border-olive group-hover:bg-olive group-hover:text-white"
          >
            {cta}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

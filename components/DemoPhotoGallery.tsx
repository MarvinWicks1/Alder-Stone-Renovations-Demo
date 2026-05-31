import { demoPhotoGallery } from "@/lib/site";

export function DemoPhotoGallery() {
  return (
    <section className="bg-white/70 py-16" aria-labelledby="demo-photo-gallery-title">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-bronze">
              Demo imagery
            </p>
            <h2
              id="demo-photo-gallery-title"
              className="mt-4 font-heading text-4xl font-bold leading-none tracking-[-0.045em] text-charcoal md:text-6xl"
            >
              Photography makes the finish easier to trust.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-slate lg:justify-self-end">
            These images are used as demo visuals only. On a live client website, this section would use real project photos supplied by the business, ideally showing before, during and after stages.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {demoPhotoGallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden border border-soft-taupe bg-white shadow-[0_20px_70px_rgba(24,32,40,0.10)]"
            >
              <div className="relative h-80 overflow-hidden bg-charcoal">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-bold leading-none tracking-[-0.04em]">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-muted-slate">{item.caption}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
                  Demo photo placeholder
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

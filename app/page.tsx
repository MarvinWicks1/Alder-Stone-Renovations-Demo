import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { DemoPhotoGallery } from "@/components/DemoPhotoGallery";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectCard } from "@/components/ProjectCard";
import { SampleReviews } from "@/components/SampleReviews";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustCards } from "@/components/TrustCards";
import { processSteps, projects, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <DemoNotice />

      <section className="py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What we do"
            title="Renovation work with the details thought through."
            description="From the first visit, the aim is to understand the room, the way you use it and the finish you want before any work is priced or planned."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Project examples"
            title="The kind of work homeowners usually want to see first."
            description="Kitchens, bathrooms, joinery and refurbishments are easier to judge when the layout, materials and finish are shown clearly."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <DemoPhotoGallery />

      <section className="py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Before work starts"
            title="A good renovation starts with fewer unknowns."
            description="Homeowners need to know what is included, how long the work is likely to take and how the house will be treated while the job is underway."
          />
          <TrustCards />
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="How it works"
              title="From first message to final walkthrough."
              description="A simple process keeps the job moving and gives you clear points to ask questions, make decisions and check the details."
            />
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-none bg-bronze px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
            >
              Start your project enquiry
            </Link>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <PremiumProof />

      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card rounded-sm p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-bronze">
              Proof matters
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.055em] md:text-5xl">
              Reviews, photos and guarantees should be real.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-slate">
              A live renovation website should use genuine customer reviews, real project photos and verified trust details. This example leaves those areas clearly marked instead of inventing them.
            </p>
            <Link
              href="/process"
              className="mt-6 inline-flex rounded-none border border-soft-taupe bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-bronze hover:text-bronze"
            >
              View the process
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              "Real reviews",
              "Before and after photos",
              "Guarantees and qualifications",
            ].map((item) => (
              <article
                key={item}
                className="rounded-sm border border-soft-taupe bg-white p-5"
              >
                <p className="font-heading text-xl font-semibold tracking-[-0.045em] text-charcoal">
                  {item}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-slate">
                  Reserved for proof supplied by a real business owner.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-sm bg-charcoal p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-soft-taupe">
              About the approach
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.055em]">
              Careful work, clear conversations.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-muted-slate">
              For bigger home projects, people are not just buying the finished room. They are trusting someone with their house for days or weeks at a time. The website needs to make that feel considered from the first visit.
            </p>
            <Link
              href="/process"
              className="mt-6 inline-flex rounded-none border border-soft-taupe bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-bronze hover:text-bronze"
            >
              Learn about the process
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

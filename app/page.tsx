import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { Hero } from "@/components/Hero";
import { PremiumProof } from "@/components/PremiumProof";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustCards } from "@/components/TrustCards";
import { processSteps, projects, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <DemoNotice />

      <section className="reveal-on-scroll py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services overview"
            title="Renovation services made clear from the first visit."
            description="A strong trade website should make it easy for homeowners to understand what you do, see the quality of your work and request the right kind of quote."
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
            eyebrow="Featured projects"
            title="Example project layouts for higher-value renovation work."
            description="Project-led sections help homeowners picture the quality of work and understand the types of jobs the business takes on."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Trust before the first visit"
            title="Built around confidence, care and clear expectations."
            description="For larger home improvement projects, visitors need to feel confident before they enquire. The website should show how the business works, how homes are protected and what customers can expect."
          />
          <TrustCards />
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Process preview"
              title="A clear process from first visit to final handover."
              description="The goal is to make the customer feel informed before, during and after the project."
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
              Example layout
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.055em] md:text-5xl">
              Verified review layout placeholder.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-slate">
              On a live client website, this section would pull verified
              homeowner testimonials from Google where possible and pair them
              with project photos, insurance notes, guarantees or genuine trade
              qualifications. This demo intentionally avoids invented reviews or
              claims.
            </p>
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
                  Reserved for verified proof supplied by a real client
                  business.
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
              About preview
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.055em]">
              Careful renovation work, clearly explained.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-muted-slate">
              This demo brand is built around the kind of details homeowners
              look for before choosing a renovation company: clear
              communication, tidy work, realistic scheduling and a quality
              finish.
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

import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { Hero } from "@/components/Hero";
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
      <section className="py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services overview"
            title="Renovation services presented with calm authority."
            description="These fictional service summaries show how a premium Cheshire renovation company could guide homeowners from inspiration to enquiry."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Featured projects"
            title="Example projects with clearly labelled placeholders."
            description="Every card below is fictional and intended to demonstrate layout, tone and project storytelling only."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why homeowners choose us"
            title="Trust signals without invented proof."
            description="This concept uses transparent demo copy instead of fake reviews, real-client claims, certifications or awards."
          />
          <div className="mt-10">
            <TrustCards />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Process preview"
            title="A structured path from enquiry to handover."
            description="The preview below highlights the first four steps of a fictional seven-step renovation journey."
          />
          <ProcessSteps steps={processSteps.slice(0, 4)} />
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell">
          <div className="premium-card rounded-[2rem] p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-bronze">
              Demo testimonial/proof placeholder
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              Proof section reserved for genuine client evidence.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-slate">
              When converted into a real website, this area should contain
              authentic reviews, verified project photos, real accreditations or
              measurable proof supplied by the business.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

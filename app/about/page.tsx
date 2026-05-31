import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="About the demo"
            title="A fictional renovation brand created by VCUK Web Services."
            description="Alder & Stone Renovations exists only as an example website concept for premium trades and home improvement marketing."
          />
          <div className="premium-card rounded-[2rem] p-8 text-base leading-8 text-muted-slate">
            <p>
              This website is not a real renovation company and does not claim
              to have completed projects, won awards, earned certifications or
              received client reviews. It is a demonstration of how a
              Cheshire-focused renovation business could communicate services,
              process and enquiries in a polished way.
            </p>
            <p className="mt-5">
              VCUK Web Services created the fictional Alder & Stone identity,
              content structure and visual direction to show how a premium
              trades website can feel trustworthy while remaining transparent
              about demo content.
            </p>
            <p className="mt-5">
              If adapted for a live business, every testimonial, project image,
              accreditation and contact detail should be replaced with accurate,
              verifiable information from the real company.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Use this concept as a responsible starting point for a real brand." />
    </>
  );
}

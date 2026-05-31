import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { processSteps } from "@/lib/site";

export default function ProcessPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              align="left"
              eyebrow="Process"
              title="A straightforward route through the work."
              description="Renovation work is easier to live with when the stages are clear. This is the kind of process page that helps a homeowner understand what happens before tools arrive on site."
            />
            <div className="mt-8 rounded-sm bg-charcoal p-6 text-white">
              <p className="font-heading text-2xl font-semibold tracking-[-0.045em]">
                The aim
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Clear communication, realistic expectations and proper protection for the home from the first visit to the final clean-down.
              </p>
            </div>
          </div>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
      <CTASection />
    </>
  );
}

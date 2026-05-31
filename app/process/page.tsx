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
              eyebrow="A clear renovation process"
              title="Reducing uncertainty before a customer enquires."
              description="For higher-value home projects, the process matters as much as the final finish. This page shows how a trade business can make customers feel informed before, during and after the project."
            />
            <div className="mt-8 rounded-[2rem] bg-charcoal p-6 text-white">
              <p className="font-heading text-2xl font-semibold tracking-[-0.045em]">Trust copy</p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                The goal is to make the customer feel informed before, during and after the project with clear communication, home protection and realistic expectations.
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

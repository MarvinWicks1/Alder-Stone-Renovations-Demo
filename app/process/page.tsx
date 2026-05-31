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
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Process"
            title="A seven-step renovation journey from the brief."
            description="This fictional process shows the kind of reassurance a homeowner may need before choosing a renovation company."
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
      <CTASection title="Make a complex renovation feel organised from the first click." />
    </>
  );
}

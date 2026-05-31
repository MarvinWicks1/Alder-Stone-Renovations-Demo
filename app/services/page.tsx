import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Detailed demo service pages for premium renovation enquiries."
            description="The cards below are fictional examples for kitchens, bathrooms, refurbishments, conversions, joinery and project management."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Turn service browsers into confident renovation enquiries." />
    </>
  );
}

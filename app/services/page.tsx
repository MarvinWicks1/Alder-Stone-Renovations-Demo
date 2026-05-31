import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="reveal-on-scroll py-16 md:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Renovation services"
            title="From single-room upgrades to larger refurbishment projects."
            description="The site should help homeowners understand each service and enquire with confidence. Each section below is demo content for a fictional Cheshire renovation company."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

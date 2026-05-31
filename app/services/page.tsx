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
            eyebrow="Services"
            title="Kitchens, bathrooms, refurbishments and fitted details."
            description="Some projects are simple. Others need several trades, careful timing and decisions made in the right order. These are the main types of work this kind of renovation site would make clear."
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

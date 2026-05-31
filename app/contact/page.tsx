import { ContactForm } from "@/components/ContactForm";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Frontend-only demo enquiry form."
              description="Use this page to demonstrate a homeowner enquiry journey without collecting or sending real data."
            />
            <div className="mt-10 rounded-3xl bg-charcoal p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
                Demo contact details
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/75">
                <span>{siteConfig.email}</span>
                <span>{siteConfig.phone}</span>
                <span>{siteConfig.area}</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

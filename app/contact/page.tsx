import { ContactForm } from "@/components/ContactForm";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="reveal-on-scroll py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact"
              title="Tell us what you are thinking about changing."
              description="A few details about the room, location and rough budget are usually enough to decide whether a visit makes sense."
            />
            <div className="mt-10 rounded-sm bg-charcoal p-6 text-white shadow-2xl shadow-charcoal/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
                Contact details
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/75">
                <span>Email: {siteConfig.email}</span>
                <span>Phone: {siteConfig.phone}</span>
                <span>Location: {siteConfig.area}</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-slate">
              This is a demo contact page. On a live site, these details would be replaced with the real business email, phone number and form routing.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

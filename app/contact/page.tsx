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
              align="left"
              eyebrow="Request a project visit"
              title="A quote-focused enquiry form for useful project details."
              description="Use this demo form layout to show how a trade website can collect useful project details before the first conversation."
            />
            <div className="mt-10 rounded-sm bg-charcoal p-6 text-white shadow-2xl shadow-charcoal/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-soft-taupe">
                Demo contact details
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/75">
                <span>Email: {siteConfig.email}</span>
                <span>Phone: {siteConfig.phone}</span>
                <span>Location: {siteConfig.area}</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-slate">
              This page is part of a fictional demo website. On a real
              renovation website, contact details and form routing would be
              replaced with verified business information.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

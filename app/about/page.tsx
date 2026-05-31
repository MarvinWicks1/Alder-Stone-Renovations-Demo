import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { SectionHeader } from "@/components/SectionHeader";

const values = [
  "Careful planning",
  "Clean workmanship",
  "Good communication",
  "Quality finish",
  "Clear expectations",
];

export default function AboutPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="reveal-on-scroll py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="About"
            title="A quieter approach to home renovation."
            description="Good renovation work is not just about the finish. It is about planning properly, communicating clearly and keeping the work organised from start to handover."
          />
          <div className="premium-card rounded-sm p-8 text-base leading-8 text-muted-slate md:p-10">
            <p>
              Alder & Stone Renovations is presented as a small Cheshire renovation company focused on kitchens, bathrooms, refurbishments and fitted details. The tone is calm, practical and centred on the questions homeowners usually have before starting a larger project.
            </p>
            <p className="mt-5">
              The site keeps the focus on clear services, realistic project examples, the working process and the kind of proof a homeowner would expect to see before making an enquiry.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-none border border-soft-taupe bg-white px-4 py-3 text-sm font-semibold text-charcoal"
                >
                  {value}
                </span>
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-8 inline-flex rounded-none bg-bronze px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
            >
              View the example projects
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

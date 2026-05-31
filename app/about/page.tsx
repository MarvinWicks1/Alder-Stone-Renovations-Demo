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
            eyebrow="About Alder & Stone Renovations"
            title="A fictional demo brand with a more renovation-led identity."
            description="The brand direction now feels closer to a calm, craft-led Cheshire renovation company instead of feeling like a generic portfolio template."
          />
          <div className="premium-card rounded-sm p-8 text-base leading-8 text-muted-slate md:p-10">
            <p>
              Alder & Stone Renovations is a fictional demo brand created by
              VCUK Web Services to show how a premium local trade website could
              be structured. The layout is designed around the kind of
              information homeowners look for before choosing a renovation
              company: clear services, project examples, process, trust signals
              and simple enquiry routes.
            </p>
            <p className="mt-5">
              The concept uses warm materials, architectural spacing, crafted
              placeholder visuals and transparent demo labelling so the site can
              demonstrate premium website building without pretending to be a
              real client project.
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

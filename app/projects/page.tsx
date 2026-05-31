import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site";

const chips = [
  "Kitchens",
  "Bathrooms",
  "Refurbishments",
  "Conversions",
  "Joinery",
];

export default function ProjectsPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="reveal-on-scroll py-16 md:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Projects"
            title="A gallery built around finish, layout and practical detail."
            description="Homeowners want to see more than a pretty final photo. A strong project page shows what changed, where the value was added and what kind of work the company is best suited to."
          />
          <div
            className="mt-8 flex flex-wrap justify-center gap-3"
            aria-label="Example project categories"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-none border border-soft-taupe bg-white px-4 py-2 text-sm font-semibold text-muted-slate shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

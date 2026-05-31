import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site";

const chips = [
  "All examples",
  "Kitchens",
  "Bathrooms",
  "Conversions",
  "Refurbishments",
  "Joinery",
];

export default function ProjectsPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Projects"
            title="Fictional project examples with filter-style browsing."
            description="These chips demonstrate a portfolio interface. They are visual examples only and do not filter real client work."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-soft-taupe bg-white px-4 py-2 text-sm font-semibold text-muted-slate"
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
      <CTASection title="Create a project gallery that uses only genuine proof when live." />
    </>
  );
}

import { CTASection } from "@/components/CTASection";
import { DemoNotice } from "@/components/DemoNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site";

const chips = ["Kitchens", "Bathrooms", "Refurbishments", "Conversions", "Joinery"];

export default function ProjectsPage() {
  return (
    <>
      <DemoNotice compact />
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Example renovation projects"
            title="A polished gallery for the type of work a premium trade business wants more of."
            description="A project gallery helps a premium trade business show quality, detail and the type of work it wants more of. These are fictional examples with labelled placeholder visuals."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Example project categories">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-soft-taupe bg-white px-4 py-2 text-sm font-semibold text-muted-slate shadow-sm">
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

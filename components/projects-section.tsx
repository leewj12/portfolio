import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const projects = getAllProjects();
  return (
    <section id="projects" className="container-px scroll-mt-20 py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        프로젝트
      </h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        직접 참여한 팀 프로젝트 4개입니다. 카드를 누르면 상세 페이지로 이동합니다.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

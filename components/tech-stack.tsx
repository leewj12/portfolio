const groups: { label: string; items: string[] }[] = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "JPA / MyBatis", "MySQL", "REST API"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML / CSS / JS"],
  },
  {
    label: "DevOps · Infra",
    items: ["Docker", "AWS EC2", "Nginx", "Git", "Let's Encrypt"],
  },
];

export function TechStack() {
  return (
    <section className="container-px py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        기술 스택
      </h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        프로젝트에서 실제로 사용한 기술들입니다.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40"
          >
            <h3 className="font-mono text-sm font-semibold text-indigo-500">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

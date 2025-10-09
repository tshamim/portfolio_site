import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="container">
        <div className="mx-auto max-w-5xl py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.href} className="card p-6 hover:bg-white/[.03] transition block">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-300/90">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300/80">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-lg border border-white/10">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

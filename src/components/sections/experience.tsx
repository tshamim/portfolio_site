import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10">
      <div className="container">
        <div className="mx-auto max-w-5xl py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <p className="mt-3 text-neutral-300/90">
            A sample of the teams I have helped scale through design systems, quick iteration,
            and close collaboration with product and go-to-market partners.
          </p>

          <div className="mt-10 space-y-8">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.role}`} className="card p-6 md:p-8">
                <header className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="text-sm text-neutral-400">{exp.company}</span>
                  <span className="ml-auto text-xs tracking-widest uppercase text-neutral-400">
                    {exp.period}
                  </span>
                </header>

                <p className="mt-4 text-neutral-300/90">{exp.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-300/80 list-disc pl-5">
                  {exp.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-300/80">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

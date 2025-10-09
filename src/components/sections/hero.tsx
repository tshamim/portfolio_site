export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 spotlight" />
      <div className="container py-14 sm:py-16 md:py-24">
        {/* On small screens, show avatar above text; on md+, text first */}
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-[1.2fr_.8fr]">
          {/* Avatar (first on mobile) */}
          <div className="justify-self-center order-1 md:order-2">
            <div className="glow-wrap">
              <img
                src="/profile.jpg"
                alt="Shamim Ahammed headshot"
                className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Text (second on mobile) */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="badge">Full-Stack Product Leadership</p>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
              Full-stack product and technology partner for high-growth teams.
            </h1>

            <p className="mt-4 sm:mt-5 text-neutral-300/90 text-base sm:text-lg leading-relaxed">
              I&apos;m <span className="font-semibold name-gradient">Shamim Ahammed</span>, a fractional CTO and senior full-stack
              developer shaping SaaS platforms, e-commerce experiences, and internal tools that
              convert. I align product strategy, UX, and engineering so your roadmap ships fast,
              scales reliably, and delivers measurable revenue.
            </p>

            <p className="mt-4 text-neutral-300/80 text-sm sm:text-base leading-relaxed">
              From React and Next.js front-ends to resilient Node, Laravel, and cloud infrastructure,
              I own the lifecycle: discovery, product roadmaps, delivery, and growth optimization.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <a href="#contact" className="btn-primary rounded-xl">Start a project</a>
              <a href="#projects" className="btn-ghost rounded-xl">See recent work</a>
            </div>

            <ul className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-neutral-400">
              <li><span className="text-white font-semibold">12+</span> yrs shipping SaaS and marketplaces</li>
              <li><span className="text-white font-semibold">20+</span> launched products</li>
              <li className="col-span-2 sm:col-span-1"><span className="text-white font-semibold">99.95%</span> uptime leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="container py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
      <p className="mt-3 text-neutral-300/90">
        From product vision to growth, I plug in where you need the most leverage.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card p-6 hover:bg-white/[.03] transition">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-neutral-300/90">{s.body}</p>
            <ul className="mt-4 space-y-1 text-sm text-neutral-400 list-disc pl-5">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

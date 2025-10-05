import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="container py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
      <p className="mt-3 text-neutral-300/90">
        Clear offers, fixed outcomes. I price by scope, not endless hours.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
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

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-white/10">
      <div className="container">
        <div className="mx-auto max-w-5xl py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="card p-6">
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-neutral-400">
                  &mdash; {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

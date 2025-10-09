"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/10">
      <div className="container">
        <div className="mx-auto max-w-3xl py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Tell me about your product</h2>
          <p className="mt-3 text-neutral-300/90">
            Share a few sentences about your goals, timeline, and success metrics. I will respond with
            a quick plan, budget range, and next steps for us to explore.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl bg-white/[.02] border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl bg-white/[.02] border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <input
              name="company"
              placeholder="Company (optional)"
              className="w-full rounded-xl bg-white/[.02] border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <textarea
              name="message"
              placeholder="What are you building or improving?"
              required
              rows={5}
              className="w-full rounded-xl bg-white/[.02] border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <div className="flex items-center gap-3">
              <button disabled={status === "sending"} className="btn-primary rounded-xl">
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "sent" && (
                <p className="text-green-400 text-sm">Thanks! I&apos;ll reach out within one business day.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

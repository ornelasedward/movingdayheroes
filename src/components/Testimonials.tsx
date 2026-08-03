import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "They showed up on time, wrapped everything carefully, and had us settled in before dinner. Moving day actually felt manageable.",
    name: "Sarah M.",
    role: "Residential move",
  },
  {
    quote:
      "We needed an office relocated over a weekend with zero downtime Monday. The crew was professional, fast, and careful with our equipment.",
    name: "James T.",
    role: "Commercial move",
  },
  {
    quote:
      "Honest quote, no surprise fees, and they treated our furniture like it was theirs. Highly recommend for local or long-distance.",
    name: "Priya & Dan",
    role: "Long-distance move",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary-soft/50">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">What customers say</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink text-balance tracking-wide">
            Trusted movers. Real reviews.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-card p-8 shadow-soft border border-border/60 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-ink flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-medium text-ink">{r.name}</div>
                <div className="text-base text-ink/70">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

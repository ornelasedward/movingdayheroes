import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "How much does a move cost?",
    a: "Pricing depends on home size, distance, packing needs, and stairs or elevators. We give transparent, itemized quotes — no surprise fees. Request a free quote and we'll respond within 24 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Moving Day Heroes is fully licensed and insured. Your belongings are protected from pickup to delivery.",
  },
  {
    q: "Do you offer packing services?",
    a: "Absolutely. We offer full packing, partial packing, and packing supplies. Fragile items get professional wrapping and labeling so nothing is left to chance.",
  },
  {
    q: "How far in advance should I book?",
    a: "For weekends and end-of-month moves, book 2–4 weeks ahead when you can. Last-minute moves are often possible — call us and we'll see what we can do.",
  },
  {
    q: "What areas do you serve?",
    a: `We handle local and long-distance moves. ${SITE.serviceArea}`,
  },
  {
    q: "Do you move specialty items?",
    a: "Yes — pianos, antiques, safes, fitness equipment, and oversized furniture. Tell us what you need moved and we'll plan the right crew and equipment.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container-tight max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Frequently asked</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">Good questions, clear answers</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-xl text-ink hover:no-underline py-5 tracking-wide">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

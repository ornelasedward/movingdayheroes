import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PAGE_FAQS } from "@/lib/content";

const FAQ = () => {
  const preview = PAGE_FAQS.slice(0, 6);

  return (
    <section className="py-24">
      <div className="container-tight max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Frequently asked</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">Good questions, clear answers</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {preview.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-xl text-ink hover:no-underline py-5 tracking-wide">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="body-copy pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-10">
          <Link to="/faqs" className="text-sm font-medium text-ink hover:text-primary transition-colors">
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

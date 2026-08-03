import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PAGE_FAQS } from "@/lib/content";
import { SITE } from "@/lib/site";

const FAQs = () => {
  return (
    <Layout
      title={`FAQs | Austin Movers | ${SITE.name}`}
      description="Straight answers about Austin moving costs, packing, booking, specialty items, and more from Moving Day Heroes."
      canonical={`${SITE.domain}/faqs`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">FAQs</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink tracking-wide text-balance">
            Got questions? We've got <span className="text-primary">straight answers</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know before, during, and after your Austin move.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {PAGE_FAQS.map((f, i) => (
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

          <div className="mt-14 text-center">
            <p className="text-muted-foreground mb-6">Still have questions? We're happy to talk it through.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="sun" size="lg">
                <Link to="/get-a-quote">
                  Get a free quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.phoneLink}>Call {SITE.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;

import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { locationImage } from "@/components/ServiceAreasGrid";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLocation, FEATURED_LOCATIONS } from "@/lib/content";
import { SITE } from "@/lib/site";
import NotFound from "@/pages/NotFound";

const LocationPage = () => {
  const { slug } = useParams();
  const location = slug ? getLocation(slug) : undefined;

  if (!location) return <NotFound />;

  const faqs = [
    {
      q: `How do movers handle apartments and homes in ${location.label}?`,
      a: `Relocations involving apartments and residential homes often require coordination around parking, elevators, and neighborhood access. ${SITE.name} organizes loading procedures, transportation planning, and furniture protection designed for efficient moves between property types throughout ${location.name}.`,
    },
    {
      q: `Do you offer office moving in ${location.label}?`,
      a: `Yes. Office moves involve equipment organization, workstation prep, and careful transport of furniture and electronics. We support commercial relocations with organized loading schedules and protective handling to reduce downtime.`,
    },
    {
      q: `What should I prepare before moving day in ${location.name}?`,
      a: `Label boxes, set aside essentials, and confirm property access details before moving day. We'll help coordinate timelines, loading procedures, and transportation logistics for a smoother move.`,
    },
  ];

  const nearby = FEATURED_LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 5);

  return (
    <Layout
      title={`Moving Company in ${location.label} | ${SITE.name}`}
      description={location.intro}
      canonical={`${SITE.domain}/service-areas/${location.slug}`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">Service area</p>
            <h1 className="font-display text-4xl md:text-6xl text-ink tracking-wide text-balance leading-tight">
              Professional moving company in {location.label}
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{location.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="sun" size="lg">
                <Link to="/get-a-quote">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.phoneLink}>
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden shadow-card">
            <img
              src={locationImage(location)}
              alt={`Moving services in ${location.label}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide text-balance">
            Why choose {SITE.name} as your moving company in {location.label}?
          </h2>
          <p className="mt-2 text-primary font-medium">Reliable. Structured. Efficient.</p>
          <ul className="mt-8 space-y-6">
            {[
              {
                t: `Organized relocation planning across ${location.name}`,
                d: `We manage residential and commercial moves with structured loading plans, organized scheduling, and careful transportation coordination — prepared for local property layouts, traffic patterns, and access limitations common in ${location.name}.`,
              },
              {
                t: "Flexible support for homes, apartments, and offices",
                d: "From apartment complexes and townhomes to family residences and office suites, we adapt strategies to reduce delays from elevators, gated communities, and busy loading zones.",
              },
              {
                t: "Dependable processes for local and regional moves",
                d: "Organized truck loading, protective wrapping, and coordinated scheduling support smooth transitions between properties throughout Travis County and Central Texas.",
              },
            ].map((item) => (
              <li key={item.t} className="flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-ink tracking-wide">{item.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container-tight max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide">
            Why hire professional movers in {location.label}?
          </h2>
          <p className="mt-2 text-primary font-medium">Protection. Readiness. Convenience.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Diverse property types",
                d: "Apartments, suburban homes, and offices often need different strategies for parking, elevators, and loading access.",
              },
              {
                t: "Less stress on busy timelines",
                d: "Organized support helps when you're juggling work, closings, and lease deadlines during a local move.",
              },
              {
                t: "Better protection for belongings",
                d: "Structured packing, padding, and loading practices help reduce shifting and damage in transit.",
              },
            ].map((item) => (
              <div key={item.t} className="p-6 bg-card border border-border/60">
                <h3 className="font-display text-xl text-ink tracking-wide">{item.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide text-center mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-xl tracking-wide">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-ink text-background">
        <div className="container-tight max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            Moving in or out of {location.name}?
          </h2>
          <p className="mt-4 text-background/70 leading-relaxed">
            {SITE.name} has you covered — local house moves, apartment relocations, office transfers, and
            long-distance. We're proud to serve {location.label}.
          </p>
          <Button asChild variant="sun" size="lg" className="mt-8">
            <Link to="/get-a-quote">
              Get a Quote Today <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container-tight">
            <h2 className="font-display text-3xl text-ink tracking-wide text-center mb-8">
              Cities we serve around Austin, TX
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((l) => (
                <Link
                  key={l.slug}
                  to={`/service-areas/${l.slug}`}
                  className="px-4 py-2 border border-border text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="px-4 py-2 border border-border text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors"
              >
                All areas
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default LocationPage;

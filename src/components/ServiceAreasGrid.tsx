import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FEATURED_LOCATIONS, LOCATIONS, type LocationArea } from "@/lib/content";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import movers from "@/assets/movers.jpg";
import truck from "@/assets/truck.jpg";
import packing from "@/assets/packing.jpg";
import longDistance from "@/assets/long-distance.jpg";

const IMAGES = {
  residential,
  commercial,
  movers,
  truck,
  packing,
  "long-distance": longDistance,
} as const;

type Props = {
  /** homepage shows featured only; hub shows all */
  variant?: "featured" | "all";
  className?: string;
};

export function locationImage(area: LocationArea) {
  return IMAGES[area.image];
}

const ServiceAreasGrid = ({ variant = "featured", className }: Props) => {
  const areas = variant === "featured" ? FEATURED_LOCATIONS : LOCATIONS;

  return (
    <section className={cn("py-20 md:py-24", className)}>
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-3">Locations</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">Our Service Areas</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Moving can be overwhelming—but it doesn't have to be. At {SITE.name}, we offer a range of services
            designed to make your relocation smooth and stress-free. Whether you're moving a home, business, or just
            a few specialty items, our team is here to help with care, experience, and attention to detail every step
            of the way.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.slug}
              className="flex flex-col overflow-hidden border border-border/60 bg-card shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={locationImage(area)}
                  alt={`Movers serving ${area.label}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 gap-4">
                <h3 className="font-display text-2xl text-ink tracking-wide text-center">{area.label}</h3>
                <Button asChild variant="hero" size="lg" className="w-full mt-auto">
                  <Link to={`/service-areas/${area.slug}`}>Explore Service Area</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {variant === "featured" && (
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/service-areas">View all service areas</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceAreasGrid;

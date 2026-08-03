import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FEATURED_LOCATIONS, LOCATIONS, type LocationArea } from "@/lib/content";
import { cn } from "@/lib/utils";

import austin from "@/assets/locations/austin.jpg";
import pflugerville from "@/assets/locations/pflugerville.png";
import roundRock from "@/assets/locations/round-rock.png";
import lakeway from "@/assets/locations/lakeway.png";
import beeCave from "@/assets/locations/bee-cave.png";
import westLakeHills from "@/assets/locations/west-lake-hills.png";
import cedarPark from "@/assets/locations/cedar-park.png";
import georgetown from "@/assets/locations/georgetown.png";
import leander from "@/assets/locations/leander.png";
import drippingSprings from "@/assets/locations/dripping-springs.png";
import kyle from "@/assets/locations/kyle.png";
import travisCounty from "@/assets/locations/travis-county.png";

const IMAGES = {
  austin,
  pflugerville,
  "round-rock": roundRock,
  lakeway,
  "bee-cave": beeCave,
  "west-lake-hills": westLakeHills,
  "cedar-park": cedarPark,
  georgetown,
  leander,
  "dripping-springs": drippingSprings,
  kyle,
  "travis-county": travisCounty,
} as const;

type Props = {
  /** homepage shows featured only; hub shows all */
  variant?: "featured" | "all";
  className?: string;
};

export function locationImage(area: LocationArea) {
  return IMAGES[area.image];
}

/** Crop focus — tall photos need bottom bias so landmarks aren't cut off */
export function locationImagePosition(area: LocationArea) {
  const positions: Partial<Record<LocationArea["image"], string>> = {
    pflugerville: "object-[center_85%]",
  };
  return positions[area.image] ?? "object-center";
}

const ServiceAreasGrid = ({ variant = "featured", className }: Props) => {
  const areas = variant === "featured" ? FEATURED_LOCATIONS : LOCATIONS;

  return (
    <section className={cn("py-20 md:py-24", className)}>
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-3">Locations</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">Our Service Areas</h2>
          <p className="mt-5 body-copy">
            Local movers across Austin and Travis County — homes, offices, and specialty moves.
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
                  alt={`${area.label} service area`}
                  className={cn("w-full h-full object-cover", locationImagePosition(area))}
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

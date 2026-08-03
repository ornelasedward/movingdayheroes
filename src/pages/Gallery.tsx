import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

import hero from "@/assets/hero-move.jpg";
import truck from "@/assets/truck.jpg";
import movers from "@/assets/movers.jpg";
import packing from "@/assets/packing.jpg";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import galleryCrew from "@/assets/gallery-crew.jpg";
import galleryTruck from "@/assets/gallery-truck.jpg";
import specialty from "@/assets/specialty.jpg";
import galleryBoxes from "@/assets/gallery-boxes.jpg";

const IMAGES = [
  { src: hero, alt: "Movers loading a truck" },
  { src: truck, alt: "Moving truck" },
  { src: movers, alt: "Crew handling boxes" },
  { src: packing, alt: "Professional packing" },
  { src: residential, alt: "Residential move" },
  { src: commercial, alt: "Commercial relocation" },
  { src: galleryCrew, alt: "Moving crew at work" },
  { src: galleryTruck, alt: "Truck on the road" },
  { src: specialty, alt: "Specialty item handling" },
  { src: galleryBoxes, alt: "Packed boxes ready to go" },
];

const Gallery = () => {
  return (
    <Layout
      title={`Gallery | ${SITE.name}`}
      description="Snapshots from real moves — clean trucks, careful packing, and crews who get the job done right."
      canonical={`${SITE.domain}/gallery`}
    >
      <section className="bg-gradient-soft pt-16 pb-10 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Gallery</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink text-balance tracking-wide">
            Behind every <span className="text-primary">move</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Clean trucks, careful wrapping, and teams who show up ready to work.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className="mb-5 break-inside-avoid overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-500"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get a quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

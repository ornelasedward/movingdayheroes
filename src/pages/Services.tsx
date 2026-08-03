import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import packingImg from "@/assets/packing.jpg";
import specialtyImg from "@/assets/specialty.jpg";
import longDistanceImg from "@/assets/long-distance.jpg";

const IMAGES: Record<string, string> = {
  "/residential": residentialImg,
  "/commercial": commercialImg,
  "/packing": packingImg,
  "/specialty": specialtyImg,
  "/long-distance": longDistanceImg,
};

const Services = () => {
  return (
    <Layout
      title={`Moving Services in Austin, TX | ${SITE.name}`}
      description="Residential, commercial, packing, specialty, and long-distance moving services from Moving Day Heroes in Austin."
      canonical={`${SITE.domain}/services`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink tracking-wide text-balance">
            Our moving services in <span className="text-primary">Austin, TX</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Full-service moving tailored to your needs — home, office, packing, specialty items, and long-distance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight space-y-16">
          {SERVICES.map((s, i) => (
            <article
              key={s.href}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden shadow-card">
                <img src={IMAGES[s.href]} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="font-display text-4xl text-ink tracking-wide">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink">
                      <Check className="h-4 w-4 text-primary shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghostInk" size="lg" className="mt-6 -ml-3">
                  <Link to={s.href}>Learn more <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild variant="sun" size="lg">
            <Link to="/get-a-quote">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SERVICE_AREAS } from "@/lib/content";
import { SITE } from "@/lib/site";

const ServiceAreas = () => {
  return (
    <Layout
      title={`Service Areas | Austin Movers | ${SITE.name}`}
      description="Moving Day Heroes serves Austin and Central Texas — Round Rock, Cedar Park, Georgetown, and long-distance moves nationwide."
      canonical={`${SITE.domain}/service-areas`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Locations</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink tracking-wide text-balance">
            Service areas across <span className="text-primary">Central Texas</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Local expertise where you live — and long-distance crews when you're leaving town.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <div key={area.name} className="p-6 border border-border/60 bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-primary mb-3">
                <MapPin className="h-4 w-4" />
                <h2 className="font-display text-2xl text-ink tracking-wide">{area.name}</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.blurb}</p>
            </div>
          ))}
        </div>

        <div className="container-tight mt-16 max-w-3xl text-center">
          <h2 className="font-display text-3xl text-ink tracking-wide">Don't see your city?</h2>
          <p className="mt-3 text-muted-foreground">
            We cover greater Austin and long-distance destinations nationwide. Tell us where you're headed.
          </p>
          <Button asChild variant="sun" size="lg" className="mt-8">
            <Link to="/get-a-quote">Get a quote today <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;

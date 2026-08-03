import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const ServiceAreas = () => {
  return (
    <Layout
      title={`Service Areas | Austin Movers | ${SITE.name}`}
      description="Moving Day Heroes serves Austin and Central Texas — Round Rock, Cedar Park, Georgetown, Lakeway, and long-distance moves nationwide."
      canonical={`${SITE.domain}/service-areas`}
    >
      <ServiceAreasGrid variant="all" className="pt-16 md:pt-24" />

      <section className="pb-20">
        <div className="container-tight max-w-3xl text-center">
          <h2 className="font-display text-3xl text-ink tracking-wide">Don't see your city?</h2>
          <p className="mt-3 text-muted-foreground">
            We cover greater Austin and long-distance destinations nationwide. Tell us where you're headed.
          </p>
          <Button asChild variant="sun" size="lg" className="mt-8">
            <Link to="/get-a-quote">
              Get a quote today <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;

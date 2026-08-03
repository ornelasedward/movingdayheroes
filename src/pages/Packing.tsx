import { Link } from "react-router-dom";
import { ArrowRight, Package, Box, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import packingImg from "@/assets/packing.jpg";
import { SITE } from "@/lib/site";

const Packing = () => {
  const points = [
    { i: Package, t: "Full packing service", d: "We pack every room so you can focus on everything else." },
    { i: Box, t: "Supplies & materials", d: "Boxes, tape, paper, and bubble wrap — professional grade." },
    { i: ShieldCheck, t: "Fragile item care", d: "Custom wrapping for dishes, art, electronics, and antiques." },
  ];

  return (
    <Layout
      title={`Packing Services | ${SITE.name}`}
      description="Professional packing services and supplies. Full, partial, or DIY packing help for a smoother move."
      canonical={`${SITE.domain}/packing`}
    >
      <PageHero
        eyebrow="Packing Services"
        title={<>Packed right. <span className="text-primary">Moved right.</span></>}
        subtitle="Need help packing? We offer full packing services using durable, high-quality materials — from a few fragile items to your entire home."
        image={packingImg}
      />

      <section className="py-24">
        <div className="container-tight grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="p-8 border border-border/60 bg-card">
              <div className="h-11 w-11 rounded-full bg-primary-soft flex items-center justify-center mb-5">
                <p.i className="h-5 w-5 text-ink" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2 tracking-wide">{p.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Button asChild variant="hero" size="lg">
            <Link to="/get-a-quote">Get packing help <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-tight max-w-3xl">
          <QuoteForm />
        </div>
      </section>
    </Layout>
  );
};

export default Packing;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import commercialImg from "@/assets/commercial.jpg";
import { SITE } from "@/lib/site";

const Commercial = () => {
  const types = [
    { t: "Office relocations", d: "Desks, servers, and workstations moved overnight or over a weekend so Monday stays productive." },
    { t: "Warehouse & industrial", d: "Heavy equipment, racking, and inventory moved with the right gear and a clear plan." },
    { t: "Retail & storefronts", d: "Efficient moves that minimize downtime and protect fixtures and inventory." },
  ];

  return (
    <Layout
      title={`Commercial Moving | ${SITE.name}`}
      description="Office and industrial movers who work around your schedule. Efficient packing, logistics, and business relocations."
      canonical={`${SITE.domain}/commercial`}
    >
      <PageHero
        eyebrow="Commercial Moving"
        title={<>Business moves without the <span className="text-primary">downtime</span></>}
        subtitle="Office and industrial moves tailored to your schedule — so operations keep running smoothly."
        image={commercialImg}
      />

      <section className="py-24">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-3">
            {types.map((x) => (
              <div key={x.t} className="p-8 border border-border/60 bg-card">
                <h3 className="font-display text-2xl text-ink mb-3 tracking-wide">{x.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Button asChild variant="hero" size="lg">
              <Link to="/get-a-quote">Plan your commercial move <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
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

export default Commercial;

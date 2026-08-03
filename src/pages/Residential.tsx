import { Link } from "react-router-dom";
import { ArrowRight, Home, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import residentialImg from "@/assets/residential.jpg";
import moversImg from "@/assets/movers.jpg";
import { SITE } from "@/lib/site";

const Residential = () => {
  return (
    <Layout
      title={`Residential Moving | ${SITE.name}`}
      description="Reliable residential movers for apartments and houses. Licensed, insured crews that treat your belongings like their own."
      canonical={`${SITE.domain}/residential`}
    >
      <PageHero
        eyebrow="Residential Moving"
        title={<>Home moves handled with <span className="text-primary">care</span></>}
        subtitle="From studio apartments to family homes — our energetic, experienced team makes residential moves stress-free."
        image={residentialImg}
      />

      <section className="py-24">
        <div className="container-tight grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[3/4] overflow-hidden shadow-card">
            <img src={moversImg} alt="Movers packing household items" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow mb-3">Local home movers</p>
            <h2 className="font-display text-4xl text-ink mb-5 tracking-wide">We treat your home like ours</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Furniture disassembly, careful wrapping, floor protection, and placement in your new space — so you can settle in faster.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { i: Heart, t: "Friendly, professional movers", d: "Courteous crews who communicate every step of the way." },
                { i: ShieldCheck, t: "Fully licensed and insured", d: "Peace of mind from pickup to delivery." },
                { i: Home, t: "Careful handling", d: "Household items wrapped and moved with attention to detail." },
              ].map((b) => (
                <li key={b.t} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary-soft flex items-center justify-center">
                    <b.i className="h-5 w-5 text-ink" />
                  </div>
                  <div>
                    <div className="font-medium text-ink">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-10">
              <Link to="/contact">Get a residential quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-muted/50">
        <div className="container-tight max-w-3xl">
          <QuoteForm />
        </div>
      </section>
    </Layout>
  );
};

export default Residential;

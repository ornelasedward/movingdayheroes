import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import longDistanceImg from "@/assets/long-distance.jpg";
import { SITE } from "@/lib/site";

const FEATURES = [
  "Licensed & insured long-distance movers",
  "Transparent, itemized pricing",
  "Full-service packing available",
  "Careful loading and secure transport",
  "Delivery on an agreed timeline",
  "Furniture placement at destination",
];

const LongDistance = () => {
  return (
    <Layout
      title={`Long-Distance Moving | ${SITE.name}`}
      description="Safe, on-time long-distance moving. Licensed and insured crews for interstate and cross-state relocations."
      canonical={`${SITE.domain}/long-distance`}
    >
      <PageHero
        eyebrow="Long-Distance Moving"
        title={<>Wherever you're headed, <span className="text-primary">we'll get you there</span></>}
        subtitle="Planning a move across the state or out of state? We ensure safe, on-time delivery — request a free quote today."
        image={longDistanceImg}
      />

      <section className="py-24">
        <div className="container-tight grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">Cross-state ready</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance tracking-wide">
              Long-distance without the headaches
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Clear timelines, careful packing, and crews who keep you updated from load day to delivery day.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-ink">
                  <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-9">
              <Link to="/get-a-quote">Get a long-distance quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="aspect-[4/3] overflow-hidden shadow-card">
            <img src={longDistanceImg} alt="Highway journey for long-distance move" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-tight max-w-3xl">
          <QuoteForm />
        </div>
      </section>

      <FAQ />
    </Layout>
  );
};

export default LongDistance;

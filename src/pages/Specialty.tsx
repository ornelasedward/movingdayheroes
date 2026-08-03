import { Link } from "react-router-dom";
import { ArrowRight, Music, Shield, Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import specialtyImg from "@/assets/specialty.jpg";
import { SITE } from "@/lib/site";

const Specialty = () => {
  const points = [
    { i: Music, t: "Pianos & antiques", d: "Trained handling and padding for instruments and irreplaceable pieces." },
    { i: Shield, t: "Safes & heavy items", d: "The right equipment for gun safes, stone, and oversized furniture." },
    { i: Dumbbell, t: "Gym & specialty gear", d: "Treadmills, machines, and awkward loads moved without damage." },
  ];

  return (
    <Layout
      title={`Specialty Moving in Austin | ${SITE.name}`}
      description="Piano, antique, safe, and specialty item movers in Austin. Custom padding and trained crews."
      canonical={`${SITE.domain}/specialty`}
    >
      <PageHero
        eyebrow="Specialty Moving"
        title={<>Heavy, delicate, and <span className="text-primary">one-of-a-kind</span></>}
        subtitle="Have a piano, safe, antique, or oversized piece? Our specialty movers bring the right gear and the right care."
        image={specialtyImg}
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
          <Button asChild variant="sun" size="lg">
            <Link to="/get-a-quote">Get a specialty quote <ArrowRight className="h-4 w-4" /></Link>
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

export default Specialty;

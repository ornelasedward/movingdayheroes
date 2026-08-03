import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { SERVICES, TEAM } from "@/lib/content";
import { SITE } from "@/lib/site";
import moversImg from "@/assets/movers.jpg";
import truckImg from "@/assets/truck.jpg";

const About = () => {
  return (
    <Layout
      title={`About Us | ${SITE.name} Austin`}
      description="Austin movers rooted in trust — honest pricing, reliable crews, and neighbors helping neighbors across Central Texas."
      canonical={`${SITE.domain}/about`}
    >
      <PageHero
        eyebrow="About Us"
        title={<>Rooted in Austin. <span className="text-primary">Driven by trust.</span></>}
        subtitle="We're more than movers — we're neighbors helping neighbors. Moving Day Heroes brings care, respect, and a personal touch to every Austin move."
        image={moversImg}
      />

      <section className="py-24">
        <div className="container-tight grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">The journey behind the boxes</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From the first quote to the final placement, we treat every move like it matters — because it does.
              Austin families and businesses deserve clear communication, careful wrapping, and crews who show up ready to work.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're hopping from East Austin to Round Rock or heading out of state, we keep it simple:
              honest pricing, licensed protection, and a stress-free moving day.
            </p>
            <Button asChild variant="sun" size="lg" className="mt-8">
              <Link to="/get-a-quote">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="aspect-[4/5] overflow-hidden shadow-card">
            <img src={truckImg} alt="Moving Day Heroes truck" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-background">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3 text-background/50">We move with purpose</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">Values that put people first</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "Local", d: "Austin-based crews who know Central Texas roads, buildings, and timelines." },
              { n: "Honest", d: "Transparent quotes with no surprise fees — what we say is what you pay." },
              { n: "Careful", d: "Blankets, wrap, and trained handling for furniture you actually care about." },
              { n: "Reliable", d: "On-time arrivals, clear updates, and follow-through from quote to unload." },
            ].map((v) => (
              <div key={v.n}>
                <h3 className="font-display text-3xl text-primary tracking-wide">{v.n}</h3>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 scroll-mt-24">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">The faces behind the move</h2>
            <p className="mt-4 text-muted-foreground">
              Dedicated people turning your moving day into a stress-free experience.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <div key={t.role} className="p-6 border border-border/60 bg-card">
                <h3 className="font-display text-2xl text-ink tracking-wide">{t.name}</h3>
                <p className="text-sm text-primary mt-1">{t.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-tight">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="font-display text-4xl text-ink tracking-wide mb-10">Full-service moving in Austin</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <li key={s.href} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <Link to={s.href} className="font-medium text-ink hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;

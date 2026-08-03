import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const Contact = () => {
  return (
    <Layout
      title={`Contact | ${SITE.name} Austin`}
      description="Contact Moving Day Heroes in Austin, TX — or get a free moving quote in under a minute."
      canonical={`${SITE.domain}/contact`}
    >
      <section className="bg-gradient-soft pt-16 pb-10 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Austin, TX</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink text-balance tracking-wide">
            Let's plan your <span className="text-primary">move</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Prefer the fast path? Answer 3 quick questions and we'll text or call you back.
          </p>
          <Button asChild variant="sun" size="lg" className="mt-8">
            <Link to="/get-a-quote">
              Start free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight grid lg:grid-cols-3 gap-10">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-card p-7 border border-border/60 shadow-soft">
              <h3 className="font-display text-xl text-ink mb-4 tracking-wide">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={SITE.phoneLink} className="flex items-center gap-3 text-ink hover:text-primary">
                    <Phone className="h-4 w-4" /> {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-ink hover:text-primary">
                    <Mail className="h-4 w-4" /> {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {SITE.city}
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4" /> {SITE.hours}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary-soft/60 p-6 border border-border/60">
              <h4 className="font-display text-lg text-ink mb-2 tracking-wide">Service area</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{SITE.serviceArea}</p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Truck,
  Home,
  Package,
  Check,
  ClipboardList,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site";
import logoMark from "@/assets/logo-mark.png";

import heroImg from "@/assets/hero-move.jpg";
import truckImg from "@/assets/truck.jpg";
import moversImg from "@/assets/movers.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import packingImg from "@/assets/packing.jpg";
import longDistanceImg from "@/assets/long-distance.jpg";
import galleryCrew from "@/assets/gallery-crew.jpg";
import galleryTruck from "@/assets/gallery-truck.jpg";
import specialtyImg from "@/assets/specialty.jpg";

const BENEFITS = [
  { icon: ShieldCheck, title: "Licensed & insured", desc: "Your belongings are protected from the first box to the last." },
  { icon: Clock, title: "On your schedule", desc: "Local and flexible timing — including evenings and weekends." },
  { icon: Truck, title: "Reliable crews", desc: "Trained movers who show up on time and treat your home with respect." },
  { icon: Package, title: "Packing available", desc: "Full or partial packing with pro-grade materials." },
  { icon: Home, title: "Home & office", desc: "Apartments, houses, and commercial spaces — same careful standard." },
];

const SERVICES = [
  {
    title: "Residential Moving",
    desc: "Apartments, houses, and everything in between — careful handling of household items from start to finish.",
    img: residentialImg,
    href: "/residential",
    points: ["Friendly, professional movers", "Fully licensed and insured", "Careful handling of all household items"],
  },
  {
    title: "Commercial Moving",
    desc: "Office and industrial moves tailored to your schedule so your team stays productive.",
    img: commercialImg,
    href: "/commercial",
    points: ["Office and warehouse moving", "Weekend & after-hours options", "Efficient packing and logistics"],
  },
  {
    title: "Packing Services",
    desc: "Full packing, partial packing, or supplies only — we wrap fragile items so nothing is left to chance.",
    img: packingImg,
    href: "/packing",
    points: ["Wrapping and packing for any move", "Affordable supply packages", "Secure, professional-grade materials"],
  },
  {
    title: "Long-Distance Moving",
    desc: "Across the state or across the country — safe, on-time delivery wherever you're headed.",
    img: longDistanceImg,
    href: "/long-distance",
    points: ["Long-distance moving experts", "Licensed and insured movers", "Full-service packing and transport"],
  },
];

const Index = () => {
  return (
    <Layout
      title="Moving Day Heroes — Professional Local & Long-Distance Movers"
      description="Honest pricing. Reliable crews. Licensed and insured movers for residential, commercial, packing, and long-distance moves. Get a free quote today."
      canonical={`${SITE.domain}/`}
    >
      {/* HERO — full-bleed composition */}
      <section className="relative flex items-end overflow-hidden min-h-[420px] md:min-h-[480px]">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src={heroImg}
          alt="Professional movers loading a moving truck"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

        <div className="container-tight relative z-10 pb-10 pt-8 md:pb-14 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl"
          >
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-5 drop-shadow-md"
            />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-background text-balance tracking-wide">
              Top-rated movers in Travis County
            </h1>
            <p className="mt-4 text-base md:text-lg text-background/85 max-w-2xl leading-relaxed">
              Moving Day Heroes is a professional moving company in Travis County, TX delivering organized
              relocation services for residential and commercial properties throughout the region. From urban
              apartment complexes to suburban family homes, we provide careful packing coordination, dependable
              transportation planning, and structured moving support designed for efficient local relocations
              across Travis County communities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="sun" size="xl" className="h-14 px-10 text-lg md:h-16 md:px-12 md:text-xl font-semibold">
                <Link to="/get-a-quote">
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="h-14 px-6 text-lg md:h-16 md:px-8 md:text-xl border-background/40 bg-background/10 text-background hover:bg-background/20 hover:text-background"
              >
                <a href={SITE.phoneLink}>
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
              </Button>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-7 text-sm text-background/70"
            >
              Licensed · Insured · {SITE.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 md:py-14 bg-ink text-background">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-balance tracking-wide">
              How it works
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Book our service", d: "Call or request a quote online. We want you as stress-free as possible.", Icon: ClipboardList },
              { n: "02", t: "Professional packing", d: "We take our time wrapping your belongings — especially the fragile ones.", Icon: Box },
              { n: "03", t: "Transport", d: "Whether you need one truck or more, we move carefully and on schedule.", Icon: Truck },
              { n: "04", t: "Unload & place", d: "Tell us where everything goes in your new space — we'll get it there.", Icon: Home },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative py-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="font-display text-5xl text-background leading-none">{s.n}</div>
                  <s.Icon className="h-8 w-8 text-background/90" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2 tracking-wide text-primary">{s.t}</h3>
                <p className="text-background/80 leading-relaxed text-sm md:text-base">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid variant="featured" className="bg-muted/40 border-b border-border/60" />

      {/* TRUST STRIP */}
      <section className="py-10 border-b border-border/60 bg-card">
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base text-ink">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Licensed & insured</span>
          <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Clean trucks, careful crews</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {SITE.hours}</span>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-24">
        <div className="container-tight grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-card">
              <img src={moversImg} alt="Movers carefully handling boxes" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-48 aspect-[4/3] overflow-hidden shadow-card border-4 border-background">
              <img src={truckImg} alt="Moving truck ready for delivery" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <div>
            <p className="eyebrow mb-3">The Heroes difference</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance tracking-wide">
              Stress-free moves from quote to unload
            </h2>
            <p className="mt-6 body-copy">
              We treat every move like it matters — because it does. Clear communication, careful wrapping, and crews who show up ready to work. Whether you're relocating a home, office, or specialty item, we keep it simple.
            </p>
            <Button asChild variant="ghostInk" size="lg" className="mt-8 -ml-3">
              <Link to="/gallery">See our work <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-muted/60">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">Why choose us</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance tracking-wide">
              Built around your moving day
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6"
              >
                <div className="h-11 w-11 rounded-full bg-primary-soft flex items-center justify-center mb-5">
                  <b.icon className="h-5 w-5 text-ink" />
                </div>
                <h3 className="font-display text-xl text-ink mb-2 tracking-wide">{b.title}</h3>
                <p className="body-copy text-base md:text-[17px]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">Services</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink text-balance max-w-xl tracking-wide">
                Our moving services
              </h2>
            </div>
            <p className="body-copy max-w-md">
              Full-service moving tailored to your needs — home, office, packing, specialty items, and long-distance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-3xl text-ink mb-3 tracking-wide">{s.title}</h3>
                <p className="body-copy mb-5">{s.desc}</p>
                <ul className="space-y-2.5 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 body-copy text-base md:text-[17px]">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} /> {p}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghostInk" size="sm" className="-ml-3">
                  <Link to={s.href}>Learn more <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SNAPSHOTS */}
      <section className="py-24">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Snapshots</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide">Behind every move</h2>
            <p className="mt-4 body-copy">
              Clean trucks, careful wrapping, and crews who greet you with a smile.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[truckImg, galleryCrew, specialtyImg, galleryTruck].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`overflow-hidden ${i % 2 === 1 ? "mt-6" : ""}`}
              >
                <img src={src} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View gallery <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-soft">
        <div className="container-tight grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">Get pricing</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-balance tracking-wide">
              Moving in or out of Austin?{" "}
              <span className="text-primary">We've got you.</span>
            </h2>
            <p className="mt-5 body-copy">
              Answer 3 quick questions and we'll text or call you back — usually within 15 minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-ink">
              <a href={SITE.phoneLink} className="inline-flex items-center gap-3 hover:text-primary transition-colors text-lg font-medium">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <p className="body-copy text-base">Serving {SITE.serviceArea}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-8 md:p-10 border border-border/60 shadow-card">
            <p className="font-display text-3xl text-ink tracking-wide">Free quote in 60 seconds</p>
            <ul className="mt-5 space-y-2.5 body-copy text-base">
              <li>✓ Local Austin & long-distance</li>
              <li>✓ Honest, upfront pricing</li>
              <li>✓ Licensed & insured crews</li>
            </ul>
            <Button asChild variant="sun" size="lg" className="mt-8 w-full">
              <Link to="/get-a-quote">
                Start my free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
    </Layout>
  );
};

export default Index;

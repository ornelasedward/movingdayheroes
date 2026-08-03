import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  return (
    <footer className="bg-ink text-background mt-24">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" aria-label={`${SITE.name} home`} className="inline-block bg-white rounded-md px-3 py-2.5">
            <BrandLogo variant="horizontal" imgClassName="h-11 md:h-12" />
          </Link>
          <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
            Honest pricing. Reliable crews. Licensed and insured movers for residential, commercial, packing, and long-distance moves.
          </p>
          <div className="mt-6 space-y-2 text-sm text-background/80">
            <a href={SITE.phoneLink} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {SITE.city}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {SITE.hours}</p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" /> @{SITE.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 tracking-wide">Service Area</h4>
          <p className="text-sm text-background/70 leading-relaxed">{SITE.serviceArea}</p>
          <p className="mt-4 text-sm text-background/50">{SITE.tagline}</p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-tight py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Moving Day Heroes. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/admin" className="hover:text-primary transition-colors">Admin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

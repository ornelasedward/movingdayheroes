import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { MENU, SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/BrandLogo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[60] w-full transition-all duration-300",
          scrolled || open ? "bg-background border-b border-border/60 shadow-soft" : "bg-background/95 backdrop-blur-sm"
        )}
      >
        <div className="container-tight flex h-16 md:h-20 items-center justify-between gap-3 md:gap-6">
          <Link to="/" className="shrink-0 min-w-0" aria-label={`${SITE.name} home`}>
            <BrandLogo variant="horizontal" />
          </Link>

          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-ink">
            <a href={SITE.phoneLink} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary shrink-0" />
              {SITE.email}
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              Mon - Sunday: 8am - 8pm
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/get-a-quote">Get a Quote</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="p-2 -mr-2 text-ink relative z-[70]"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[55] bg-background pt-16 md:pt-20 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav className="container-tight py-6 md:py-10 max-w-2xl mx-auto">
            <div className="flex flex-col gap-3 pb-6 mb-2 border-b border-primary/25 lg:hidden text-sm font-medium">
              <a href={SITE.phoneLink} className="inline-flex items-center gap-2 text-ink">
                <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-ink">
                <Mail className="h-4 w-4 text-primary" /> {SITE.email}
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> Mon - Sunday: 8am - 8pm
              </span>
            </div>

            <ul>
              {MENU.map((item) => {
                const base = item.to.split("#")[0];
                const itemHash = item.to.includes("#") ? `#${item.to.split("#")[1]}` : "";
                const active = pathname === base && (!itemHash || hash === itemHash);
                const isServices = item.label === "Services";

                if (isServices) {
                  const serviceActive =
                    pathname === "/services" || SERVICES.some((s) => s.href === pathname);
                  return (
                    <li
                      key={item.to}
                      className="border-b border-primary/25"
                      onMouseEnter={() => setServicesOpen(true)}
                    >
                      <div className="flex items-center gap-6 md:gap-10 py-5 md:py-6">
                        <span className="text-sm text-muted-foreground tabular-nums w-8">{item.n}</span>
                        <Link
                          to={item.to}
                          className={cn(
                            "font-display text-3xl md:text-5xl tracking-wide transition-colors hover:text-primary flex-1",
                            serviceActive ? "text-primary" : "text-ink"
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle services"
                          aria-expanded={servicesOpen}
                          className="p-2 text-ink hover:text-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            setServicesOpen((v) => !v);
                          }}
                        >
                          <ChevronDown
                            className={cn(
                              "h-6 w-6 transition-transform duration-150",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                      </div>

                      {servicesOpen && (
                        <ul className="pb-5 pl-14 md:pl-[4.5rem] space-y-1">
                          <li>
                            <Link
                              to="/services"
                              className={cn(
                                "block py-2.5 text-lg md:text-xl font-medium transition-colors hover:text-primary",
                                pathname === "/services" ? "text-primary" : "text-ink-soft"
                              )}
                            >
                              All Services
                            </Link>
                          </li>
                          {SERVICES.map((s) => (
                            <li key={s.href}>
                              <Link
                                to={s.href}
                                className={cn(
                                  "block py-2.5 text-lg md:text-xl font-medium transition-colors hover:text-primary",
                                  pathname === s.href ? "text-primary" : "text-ink-soft"
                                )}
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.to} className="border-b border-primary/25">
                    <Link
                      to={item.to}
                      className={cn(
                        "flex items-center gap-6 md:gap-10 py-5 md:py-6 group",
                        active ? "text-primary" : "text-ink"
                      )}
                    >
                      <span className="text-sm text-muted-foreground tabular-nums w-8">{item.n}</span>
                      <span className="font-display text-3xl md:text-5xl tracking-wide group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 pt-8 sm:hidden">
              <Button asChild variant="sun" size="lg">
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

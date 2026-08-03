import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Phone,
  Home,
  Building2,
  Building,
  Package,
  MapPin,
  Truck,
  Check,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BrandLogo from "@/components/BrandLogo";
import { SITE } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { z } from "zod";

type Distance = "local" | "long-distance";
type MoveType = "house" | "apartment" | "condo" | "few-items";

const STEPS = ["Move", "Details", "Contact"] as const;

const DISTANCE_OPTIONS: {
  id: Distance;
  title: string;
  subtitle: string;
  icon: typeof MapPin;
}[] = [
  {
    id: "local",
    title: "Local",
    subtitle: "Around Austin metro · less than 35 miles",
    icon: MapPin,
  },
  {
    id: "long-distance",
    title: "Long distance",
    subtitle: "More than 1 hour away · over 35 miles",
    icon: Truck,
  },
];

const MOVE_OPTIONS: {
  id: MoveType;
  title: string;
  subtitle: string;
  icon: typeof Home;
}[] = [
  { id: "house", title: "House", subtitle: "Full home relocation", icon: Home },
  { id: "apartment", title: "Apartment", subtitle: "Quick and careful", icon: Building2 },
  { id: "condo", title: "Condo", subtitle: "Elevators & loading docks", icon: Building },
  {
    id: "few-items",
    title: "Few items, office & storage",
    subtitle: "Partial moves and specialty jobs",
    icon: Package,
  },
];

const HEAR_OPTIONS = [
  "Google",
  "Yelp",
  "Facebook",
  "Instagram",
  "Nextdoor",
  "Realtor referral",
  "Friend / family referral",
  "Mailer",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  email: z.string().trim().email("Valid email required").max(255),
  moveDate: z.string().max(40).optional(),
  hearAbout: z.string().max(80).optional(),
  smsConsent: z.boolean().refine((v) => v === true, {
    message: "Please agree to receive text messages to continue",
  }),
});

const GetQuote = () => {
  const [step, setStep] = useState(0);
  const [distance, setDistance] = useState<Distance | null>(null);
  const [moveType, setMoveType] = useState<MoveType | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = `Get a Free Moving Quote | ${SITE.name} Austin`;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [step, done]);

  const progress = done ? 100 : ((step + 1) / STEPS.length) * 100;

  const goBack = () => {
    if (done) {
      setDone(false);
      setStep(2);
      return;
    }
    if (step === 0) {
      window.history.length > 1 ? window.history.back() : (window.location.href = "/");
      return;
    }
    setStep((s) => s - 1);
  };

  const selectDistance = (id: Distance) => {
    setDistance(id);
    setStep(1);
  };

  const selectMoveType = (id: MoveType) => {
    setMoveType(id);
    setStep(2);
  };

  const submit = async () => {
    const parsed = contactSchema.safeParse({
      name,
      phone,
      email,
      moveDate: moveDate || undefined,
      hearAbout: hearAbout || undefined,
      smsConsent,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    if (!distance || !moveType) {
      toast.error("Please complete the earlier steps");
      setStep(0);
      return;
    }

    setSubmitting(true);
    try {
      const distanceLabel = DISTANCE_OPTIONS.find((d) => d.id === distance)?.title ?? distance;
      const moveLabel = MOVE_OPTIONS.find((m) => m.id === moveType)?.title ?? moveType;
      const body = {
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        eventDate: parsed.data.moveDate,
        location: `Austin area · ${distanceLabel}`,
        guests: moveLabel,
        message: [
          `Quote wizard submission`,
          `Distance: ${distanceLabel}`,
          `Moving: ${moveLabel}`,
          parsed.data.hearAbout ? `Heard about us: ${parsed.data.hearAbout}` : null,
          `Market: Austin, TX`,
        ]
          .filter(Boolean)
          .join("\n"),
        smsConsent: true,
      };

      const { data: result, error } = await supabase.functions.invoke("send-quote-request", {
        body,
      });
      if (error || !result?.success) {
        throw new Error(error?.message || result?.error || "Submission failed");
      }
      setDone(true);
      toast.success("Quote request sent!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(`Couldn't send: ${msg}. Please call ${SITE.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Quote chrome */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="container-tight h-16 md:h-18 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goBack}
            aria-label="Go back"
            className="p-2 -ml-2 text-ink hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <Link to="/" aria-label={`${SITE.name} home`} className="shrink-0">
            <BrandLogo variant="horizontal" imgClassName="h-9 md:h-10" />
          </Link>
          <a
            href={SITE.phoneLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{SITE.phone}</span>
          </a>
        </div>
        <div className="h-1 bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </header>

      <main className="flex-1 container-tight py-10 md:py-16 max-w-3xl mx-auto w-full">
        {!done && (
          <div className="flex items-center justify-center gap-2 mb-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className={cn(i === step ? "text-ink font-semibold" : i < step ? "text-primary" : "")}>
                  {i + 1} {label}
                </span>
                {i < STEPS.length - 1 && <span className="text-border">·</span>}
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center py-10"
            >
              <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-ink tracking-wide">You're all set!</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thanks — your Austin quote request is in. Our team will text or call you within 15 minutes
                ({SITE.hours}).
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="sun" size="lg">
                  <a href={SITE.phoneLink}>
                    <Phone className="h-4 w-4" /> Call {SITE.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
              <p className="mt-8 text-xs text-muted-foreground">Your info is secure and never sold.</p>
            </motion.div>
          ) : step === 0 ? (
            <motion.div
              key="distance"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-ink text-center tracking-wide text-balance">
                How far are you moving?
              </h1>
              <p className="mt-3 text-center text-muted-foreground">Austin movers · free quote in under a minute</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {DISTANCE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => selectDistance(opt.id)}
                    className={cn(
                      "group relative text-left rounded-xl border-2 p-6 md:p-8 transition-all duration-300",
                      "bg-secondary-soft/60 border-transparent hover:border-primary hover:bg-primary-soft hover:-translate-y-0.5 hover:shadow-card",
                      distance === opt.id && "border-primary bg-primary-soft shadow-card"
                    )}
                  >
                    <opt.icon className="h-8 w-8 text-primary mb-5" />
                    <div className="font-display text-3xl text-ink tracking-wide">{opt.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{opt.subtitle}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="type"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-ink text-center tracking-wide text-balance">
                We're moving your…
              </h1>
              <p className="mt-3 text-center text-muted-foreground">
                {distance === "local" ? "Local Austin move" : "Long-distance move"}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {MOVE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => selectMoveType(opt.id)}
                    className={cn(
                      "group relative text-left rounded-xl border-2 p-6 transition-all duration-300",
                      "bg-secondary-soft/60 border-transparent hover:border-primary hover:bg-primary-soft hover:-translate-y-0.5 hover:shadow-card",
                      moveType === opt.id && "border-primary bg-primary-soft shadow-card"
                    )}
                  >
                    <opt.icon className="h-7 w-7 text-primary mb-4" />
                    <div className="font-display text-2xl text-ink tracking-wide">{opt.title}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{opt.subtitle}</p>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-ink text-center tracking-wide text-balance">
                Get your quote now
              </h1>
              <p className="mt-3 text-center text-muted-foreground">
                We'll text or call within 15 minutes — no spam, no obligation.
              </p>

              <div className="mt-10 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={SITE.phone}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="moveDate">Preferred move date (optional)</Label>
                    <Input
                      id="moveDate"
                      type="date"
                      value={moveDate}
                      onChange={(e) => setMoveDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>How did you hear about us? (optional)</Label>
                    <Select value={hearAbout || undefined} onValueChange={setHearAbout}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one…" />
                      </SelectTrigger>
                      <SelectContent>
                        {HEAR_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="smsConsent"
                      checked={smsConsent}
                      onCheckedChange={(v) => setSmsConsent(v === true)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="smsConsent" className="text-sm font-normal leading-relaxed text-muted-foreground cursor-pointer">
                      <span className="text-ink font-medium">I agree to receive text messages from {SITE.name}</span> about
                      my quote and move. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or
                      HELP for help. See our{" "}
                      <a href="/privacy" className="underline text-primary hover:text-primary/80" target="_blank" rel="noreferrer">
                        Privacy Policy
                      </a>
                      .
                    </Label>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="sun"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                  onClick={submit}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Get my free quote"
                  )}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating call */}
      <a
        href={SITE.phoneLink}
        aria-label={`Call ${SITE.name}`}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default GetQuote;

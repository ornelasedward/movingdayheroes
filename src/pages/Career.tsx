import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";
import { toast } from "sonner";

const Career = () => {
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Front-end capture for now — wire to backend / email when ready
    console.info("Career application", data);
    setDone(true);
    toast.success("Application received — we'll be in touch.");
  };

  return (
    <Layout
      title={`Careers | Join ${SITE.name} Austin`}
      description="Join the Moving Day Heroes team in Austin — we're hiring movers and coordinators who care about doing the job right."
      canonical={`${SITE.domain}/career`}
    >
      <section className="bg-gradient-soft pt-16 pb-12 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Join us</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink tracking-wide text-balance">
            Join the <span className="text-primary">Heroes</span> family
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We're not just moving boxes — we're moving lives. Come be part of something meaningful in Austin.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight max-w-xl">
          {done ? (
            <div className="text-center py-12 border border-border/60 bg-card p-10">
              <h2 className="font-display text-3xl text-ink tracking-wide">Thank you</h2>
              <p className="mt-3 text-muted-foreground">
                Your application is in. Our team will review it and reach out if there's a fit.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Questions? Email <a className="text-primary underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 border border-border/60 bg-card p-6 sm:p-8 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="about">Tell us about yourself</Label>
                <Textarea id="about" name="about" rows={5} placeholder="Experience, availability, why you want to join…" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="resume">Resume link (optional)</Label>
                <Input id="resume" name="resume" placeholder="Google Drive / Dropbox URL" />
                <p className="text-xs text-muted-foreground">Or email your resume to {SITE.email}</p>
              </div>
              <Button type="submit" variant="sun" size="lg" className="w-full">
                Submit application
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Career;
